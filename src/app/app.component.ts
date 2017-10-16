import { Component, OnChanges } from '@angular/core';
import { ApiService } from './ApiService.service';
import { NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = ' the amazing BMI Calculator';
    Weight = 0;
    Height = 0;
    Amount = "";
    error = "";
    ResultInfo = "";
    ResultTitle = "";
    public BMIResult: number;
    public payLoad: string;
    public values: any[];
    public resultClass = '';
    public range = '';

    childTitle: string = 'This text is passed to child from the parent';


    constructor(private appService: ApiService) { }

    ngOnInit(): void {

       // this.LoadPage();
    }

    onSubmit(form: NgForm): void {

        this.error = "";

        if (form.valid) {

            this.Weight = form.controls["Weight"].value;
            this.Height = form.controls["Height"].value;

          this.BMIResult = this.appService.CalculateBMI(this.Weight , this.Height);

          switch (true)
          {
          case (this.BMIResult < 18.5):
              this.resultClass = "bmiCircle resultU";
              this.ResultTitle = "Under weight";
              this.ResultInfo = "Your weight is less than it ideally should be. See your doctor or health professional and discuss whether you may need to aim at gaining weight. Being underweight may be associated with lack of some vitamins and minerals that can affect important body functions, such as your immune response to infection and fertility or it can lead to a multitude of health issues from heart disease to bone problems. ";
              break;
          case (this.BMIResult < 25):
              this.resultClass = "bmiCircle resultH";
              this.ResultTitle = "Healthy";
              this.ResultInfo = "Your BMI is currently within what is considered a healthy weight range. Being a healthy weight has important benefits, not only on how you feel, but also to help reduce your risk of heart disease, diabetes and a range of other conditions.";
              break;
          case (this.BMIResult < 30):
              this.resultClass = "bmiCircle resultO";
              this.ResultTitle = "Overweight";
              this.ResultInfo = "Your weight appears to be a bit above the ideal range. You should consider losing a few kilograms. You might like to talk to your doctor about whether you need to set yourself a new target for a healthy weight. ";
              break;
           case (this.BMIResult >= 30):
              this.resultClass = "bmiCircle resultOb";
              this.ResultTitle = "Obese";
              this.ResultInfo = "You currently weigh more than is ideal. This puts your health at risk and is of increasing concern as you get older. It is generally recommended that you take action to reduce your weight and BMI for the sake of a healthier future.";
          }

        }
        else
        {
          this.handleError("Please enter your weight and height");
        }
    }

  public updateBMI(newValue) {
    this.range = newValue;
    console.log(this.range);
    console.log(this.Height);
  }

    onNotify(message: string): void {
        this.childTitle = 'Parent calling';
    }

    LoadPage(): void {

        this.appService
            .GetAllItems()
            .subscribe(data => this.values = data,
            error => console.log(error),
            () => console.log('Get all complete'));

    }

    handleError(error: any){
        console.log('An error occurred', error); // for demo purposes only

        // Not able to parse poor json message
        // var errorJson2 = JSON.parse(error);
        this.error = error;
    }


}
