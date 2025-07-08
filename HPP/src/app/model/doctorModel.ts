export class Doctormodel {
  id: string;
  name: string;
  dname: string[];

  constructor(id: string, name: string, dname: string[] = []) {
    this.id = id;
    this.name = name;
    this.dname = dname;
  }
}