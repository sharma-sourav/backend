export class EmployeDto {

    "name" : string;   
    "email":string;
    "phone":string;
    "experience":string;
    "skill": string;
    "company": string;
    "freelancer": string;
}

export class Employee extends EmployeDto {
    "imglink": string;
   
}
