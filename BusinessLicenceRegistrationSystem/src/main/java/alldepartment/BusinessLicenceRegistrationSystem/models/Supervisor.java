package alldepartment.BusinessLicenceRegistrationSystem.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
@Getter
@Setter
public class Supervisor {
    @Id
    private Long id;
    private String fullName;
    private String address;
    private String emailId;
    private int phoneNumber;
    private String departmentName;

}
