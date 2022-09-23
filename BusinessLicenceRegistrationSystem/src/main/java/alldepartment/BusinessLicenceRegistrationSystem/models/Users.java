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
public class Users {
    @Id
    private Long id;
    private String emailId;
    private String password;
}
