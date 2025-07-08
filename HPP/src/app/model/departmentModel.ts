
export class DepartmentModel {
  id?: string;
  dname: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.dname = name;
  }
}