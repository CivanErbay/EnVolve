package de.neuefische.erbay.envolve.security;

import de.neuefische.erbay.envolve.db.TeacherDb;
import de.neuefische.erbay.envolve.model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MongoDbUserDetailsService implements UserDetailsService {
    private final TeacherDb teacherDb;

    @Autowired
    public MongoDbUserDetailsService(TeacherDb teacherDb) {
        this.teacherDb = teacherDb;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Teacher> optionalUser = teacherDb.findById(username);
        if (optionalUser.isEmpty()){
            throw new UsernameNotFoundException("user with username: \""+username+"\" not found");
        }

        Teacher teacher = optionalUser.get();

        return new User(teacher.getUserName(), teacher.getPassword(), List.of(new SimpleGrantedAuthority("admin")));
    }
}
