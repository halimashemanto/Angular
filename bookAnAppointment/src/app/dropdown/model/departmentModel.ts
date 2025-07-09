
export class DepartmentModel {
  id: string;
  name: string;
  doctorModel: string[];

  constructor(id: string, name: string, doctorModel: string[] = []) {
    this.id = id;
    this.name = name;
    this.doctorModel = doctorModel;
  }
}