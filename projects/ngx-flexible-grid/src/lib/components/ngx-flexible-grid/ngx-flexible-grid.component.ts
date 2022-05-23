import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ngx-flexible-grid',
  templateUrl: './ngx-flexible-grid.component.html',
  styleUrls: ['./ngx-flexible-grid.component.css']
})
export class NgxFlexibleGridComponent implements OnInit, AfterViewInit {
  constructor(private elRef: ElementRef<HTMLElement>, private renderer2: Renderer2) {}

  @ViewChild('flexibleGridParent' , { read: ElementRef }) flexibleGridParent: any;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    for (let i = 0; i < this.flexibleGridParent?.nativeElement?.children?.length; i++) {
      const child = this.flexibleGridParent.nativeElement.children.item(i);
      child?.classList?.add('ngxFlexibleGridItem');
    }

  }
}
