package alldepartment.BusinessLicenceRegistrationSystem.repository;

import alldepartment.BusinessLicenceRegistrationSystem.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users,Integer> {
}
