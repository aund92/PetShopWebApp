import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/model/income';
import { IncomeResponse } from 'src/app/model/income-response';
import { IncomeRequest } from 'src/app/model/income-resquest';
import { IncomeDataService } from 'src/app/service/income-data.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {

  
  constructor(public datepipe: DatePipe,
    public incomeDataService:IncomeDataService) { }
  public isShowErrorStartDate:boolean=false;
  public isShowErrorEndDate:boolean=false;
  public startDate:string;
  public endDate:string;
  public incomeResponse:IncomeResponse=new IncomeResponse();
  public isShowNotFound:boolean=false;
  public incomes:Income[];
  public totalIncome:number=0;
  public startDateShowError:string;
  public endDateShowError:string;

  ngOnInit(): void {
    this.initDateTime();
  }
  

  initDateTime(){
    let date =new Date();
    this.startDate=this.datepipe.transform(date, 'yyyy-MM-dd')
    this.endDate=this.datepipe.transform(date, 'yyyy-MM-dd')
  }
  getTotalAmount() {
    this.totalIncome = 0;
    for (const item of this.incomes) {
      this.totalIncome += item.total
    }
  }
  async searchCommand(){
    if(this.startDate===""){
      this.isShowErrorStartDate=true;
    }else{
      this.isShowErrorStartDate=false;
    }
    if(this.endDate===""){
      this.isShowErrorEndDate=true;
    }else{
      this.isShowErrorEndDate=false;
    }
    if(this.isShowErrorEndDate||this.isShowErrorStartDate){
      return;
    }
    let incomeRequest:IncomeRequest=new IncomeRequest();
    incomeRequest.startDate=new Date(this.startDate);
    incomeRequest.endDate=new Date(this.endDate);
    this.incomeDataService.searchByCondition(incomeRequest).subscribe((res:HttpResponse<IncomeResponse>)=>{
      this.incomeResponse=res.body;
      this.incomes=this.incomeResponse.items;
      if(this.incomes.length===0){
        this.startDateShowError=this.startDate;
        this.endDateShowError=this.endDate;
        this.isShowNotFound=true;
      }else{
        this.isShowNotFound=false;
      }
      this.getTotalAmount();
    })
    
  }
}
