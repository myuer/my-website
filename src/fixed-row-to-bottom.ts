import { T } from '@angular/cdk/keycodes/typings';
import { Component, OnInit } from '@angular/core';

interface ItemData {
  index: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'nz-demo-table-fixed-header',
  template: `
    <nz-table #headerTable [nzData]="listOfData" [nzPageSize]="50" [nzScroll]="{ y: '240px' }" [nzFooter]="footer">
      <thead>
        <tr>
          <th nzWidth="150px">Index</th>
          <th nzWidth="150px">Name</th>
          <th nzWidth="150px">Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of headerTable.data">
          <td>{{ data.index }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
    <ng-template #footer>
        <table class="table">
          <tbody>
            <tr>
                <td>{{ this.selectedData.index }}</td>
                <td>{{ this.selectedData.name }}</td>
                <td>{{ this.selectedData.age }}</td>
                <td>{{ this.selectedData.address }}</td>
            </tr>
          </tbody>
        </table>
    </ng-template>
  `,
  styles: [
    `tr th, td{
      border: 1px solid #000;
    }
    .table tr td{
      padding: 16px;
    }

    .table tr td:nth-child(1),
    .table tr td:nth-child(2),
    .table tr td:nth-child(3){
      width: 150px;
    }
    ::ng-deep.ant-table-footer{
      padding-left: 0;
      padding-right: 0;
    }
    `
  ]

})
export class NzDemoTableFixedHeaderComponent implements OnInit {
  listOfData: ItemData[] = [];
  selectedData: ItemData;

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        index: `${i+1}`,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
      });
    }

    this.selectedData = this.listOfData[0];
  }
}
