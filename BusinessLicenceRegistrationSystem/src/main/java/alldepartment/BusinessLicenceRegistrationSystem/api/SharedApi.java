package alldepartment.BusinessLicenceRegistrationSystem.api;

import alldepartment.BusinessLicenceRegistrationSystem.exception.CustomerNotfoundException;
import alldepartment.BusinessLicenceRegistrationSystem.models.Customers;
import alldepartment.BusinessLicenceRegistrationSystem.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SharedApi {
    private static CustomerRepository customerRepository;

    public SharedApi(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;

    }

    public static Customers addCustomers(Customers customers) {

        return customerRepository.save(customers);

    }

    public static List<Customers> findAllCustomers() {
        return customerRepository.findAll();
    }

    public static Customers updateCustomers(Customers customers) {
        return customerRepository.save(customers);
    }

    public static Customers findCustomersById(Long id) {
        return customerRepository.findCustomerById(id)
                .orElseThrow(() -> new CustomerNotfoundException("user by id" + id + "was not found"));
    }

    public static void deleteCustomers(Long id) {
        customerRepository.deleteCustomersById(id);
    }


}
