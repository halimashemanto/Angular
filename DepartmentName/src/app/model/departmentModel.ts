export class DepartmentModel {

    id !: string;
    nameOfDepartment !: string;



    doctor!: {

        id: string;
        name: string;
        location: string;
        chamber: string;
        specalist: string;
        gender: string;
    }


}