package alldepartment.BusinessLicenceRegistrationSystem.controller;

import alldepartment.BusinessLicenceRegistrationSystem.api.SharedApi;
import alldepartment.BusinessLicenceRegistrationSystem.models.Customers;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class SharedController {
    private final SharedApi sharedApi;

    public SharedController(SharedApi sharedApi) {
        this.sharedApi = sharedApi;
    }

    @GetMapping("/all")
//    @GetMapping
    public ResponseEntity<List<Customers>> getAllCustomers (){
        List<Customers> customers = SharedApi.findAllCustomers();
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Customers> getAllCustomersById (@PathVariable("id")Long id){
        Customers customers = SharedApi.findCustomersById(id);
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @PostMapping("/add")
//    @PostMapping
    public ResponseEntity<Customers> addCustomers(@RequestBody Customers customers){
        Customers newCustomers = SharedApi.addCustomers(customers);
        return new ResponseEntity<>(newCustomers, HttpStatus.CREATED);
    }

    @PutMapping("/update")
//    @PutMapping("/{id}")
    public ResponseEntity<Customers> updateCustomers(@RequestBody Customers customers){
        Customers updateCustomers = SharedApi.updateCustomers(customers);
        return new ResponseEntity<>(updateCustomers, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
//    @DeleteMapping
    public ResponseEntity<?> deleteCustomers(@PathVariable("id")Long id){
        SharedApi.deleteCustomers(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
