package alldepartment.BusinessLicenceRegistrationSystem.repository;

import alldepartment.BusinessLicenceRegistrationSystem.models.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customers,Integer> {
    void deleteCustomersById(Long id);


    Optional <Customers> findCustomerById(Long id);
}
