package de.neuefische.erbay.envolve.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

    @EnableWebSecurity
    public class SecurityConfig extends WebSecurityConfigurerAdapter {

        private final FirebaseDBUserDetailsService userDetailsService;
        private final JwtAuthFilter authFilter;

        @Autowired
        public SecurityConfig(FirebaseDBUserDetailsService userDetailsService, JwtAuthFilter authFilter) {
            this.userDetailsService = userDetailsService;
            this.authFilter = authFilter;
        }

        @Override
        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
            auth.userDetailsService(userDetailsService);
        }

        @Bean
        public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                 //not perfectly secure

                    .authorizeRequests()
                    .antMatchers("/teacher/api/**").authenticated() //maybe teacher in between
                    .antMatchers("/**").permitAll()
                    .and()
                    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                    .csrf().disable();

            http.addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class);
        }

        @Bean
        @Override
        public AuthenticationManager authenticationManagerBean() throws Exception {
            return super.authenticationManagerBean();
        }
}
