package alldepartment.BusinessLicenceRegistrationSystem.models;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
public class Customers {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String fullName;
    private String gender;
    private String address;
    private String emailId;
    private String age;
    private String maritialStatus;
    private String nationality;
    private int phoneNumber;
}
