package com.example.demo.configuration;

import java.io.IOException;

import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.demo.repository.TokenRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter{
	
	
	private final JwtService jwtService;
	private final UserDetailsService userDetailsService;
	 private final TokenRepository tokenRepository;
	
	
	@Override
	protected void doFilterInternal(
			@NonNull HttpServletRequest request, 
			@NonNull HttpServletResponse response, 
			@NonNull FilterChain filterChain)
			throws ServletException, IOException {
		
			final String authHeader = request.getHeader("Authorization");
			final String jwt;
			final String userEmail;
			
			//checking the JSON token
			if(authHeader == null || !authHeader.startsWith("Bearer ")) {
				filterChain.doFilter(request, response);
				return;
			}
	       //extracting the JWT token from the authHeader
			jwt = authHeader.substring(7);
			//extracting the userEmail from JWT token
			userEmail = jwtService.extractUsername(jwt);
			
			if(userEmail!=null && SecurityContextHolder.getContext().getAuthentication() == null) {
				UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
				 var isTokenValid = tokenRepository.findByToken(jwt)
				          .map(t -> !t.isExpired() && !t.isRevoked())
				          .orElse(false);
				if(jwtService.isTokenValid(jwt, userDetails)  && isTokenValid) {
					
					
					UsernamePasswordAuthenticationToken authtoken = new UsernamePasswordAuthenticationToken(
							userDetails,
							null,
							userDetails.getAuthorities()
							
							);
					authtoken.setDetails(
							new WebAuthenticationDetailsSource().buildDetails(request)
							);
					
					SecurityContextHolder.getContext().setAuthentication(authtoken);
				}
			}
			filterChain.doFilter(request, response);
	}

}
