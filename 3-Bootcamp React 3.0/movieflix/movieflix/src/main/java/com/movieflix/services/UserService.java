package com.movieflix.services;

import java.util.List;

import com.movieflix.dtos.UserDTO;
import com.movieflix.entities.Role;
import com.movieflix.entities.User;
import com.movieflix.projections.UserDetailsProjection;
import com.movieflix.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.movieflix.constants.Constants.EMAIL_NOT_FOUND;


@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private AuthService authService;

    @Transactional(readOnly = true)
    public UserDTO getProfile() {
        return new UserDTO(authService.authenticated());
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        List<UserDetailsProjection> result = repository.searchUserAndRolesByEmail(username);
        if (result.size() == 0) {
            throw new UsernameNotFoundException(EMAIL_NOT_FOUND);
        }

        User user = new User();
        user.setEmail(result.get(0).getUsername());
        user.setPassword(result.get(0).getPassword());
        for (UserDetailsProjection projection : result) {
            user.addRole(new Role(projection.getRoleId(), projection.getAuthority()));
        }

        return user;
    }
}
