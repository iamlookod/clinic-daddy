import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MembersDetailForm } from "./members-detail-form";
import { format, formatDistanceToNow } from "date-fns";

@Injectable({
  providedIn: "root"
})
export class MembersDetailFormService {
  constructor(private http: HttpClient) {}

  public async getMembers(hn: string) {
    return this.http.get(`http://localhost:3001/members/${hn}`).toPromise();
  }

  public async getMembersDetailForm(query: Object) {
    return this.http
      .post("http://localhost:3001/members-detail/datatable", {
        ...query
      })
      .toPromise();
  }
  
  public async getHistory(name: string) {
    return this.http.get(`http://localhost:3001/histories/${name}`).toPromise();
  }

  public async create(data: MembersDetailForm) {
    return this.http
      .post("http://localhost:3001/members-detail", data)
      .toPromise();
  }

  public async delete(_id: string) {
    return this.http
      .delete(`http://localhost:3001/members-detail/${_id}`)
      .toPromise();
  }

  public async update(data: MembersDetailForm) {
    return this.http
      .put(`http://localhost:3001/members-detail/${data._id}`, data)
      .toPromise();
  }

  formatDate(value: string) {
    const getDate = format(new Date(value), "dd/MM/yyyy").split("/");
    const getTime = format(new Date(value), "HH:mm");
    getDate[2] = `${Number(getDate[2]) + 543}`;
    const result = `${getDate.join("-")} ${getTime}`;

    return result;
  }

  formatBirtDate(value: string) {
    const getBirtDate = format(new Date(value), "dd/MM/yyyy").split("/");
    getBirtDate[2] = `${Number(getBirtDate[2]) + 543}`;
    const birtDate = getBirtDate.join("-");

    let getAge = formatDistanceToNow(new Date(value), {
      addSuffix: false
    }).split(" ");
    const age = getAge[1];
    return `${birtDate} (${age} ปี)`;
  }
}
