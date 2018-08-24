import { Component, OnInit, AfterViewInit, ViewChildren, ViewChild, QueryList, ElementRef, Renderer, HostListener } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterViewInit {

  // tslint:disable-next-line:max-line-length
  public menuItems: any = ['All', 'Fabric Care', 'Fine Fragrance', 'Hair Care', 'Home Care', 'Personal wash', 'Toiletaries', 'Cross Category', 'Utensils', 'Scent care'];
  public hiddenMenuItems: any = [];
  public doAdapt: Boolean = false;

  @ViewChild('tabpanel') tabPanel: ElementRef;
  @ViewChildren('tabitems', { read: ElementRef }) tabItems: QueryList<ElementRef>;
  @ViewChild('tabmore') tabmore: ElementRef;
  @HostListener('window:resize') onResize() {
    if (this.tabPanel) {
      this.adaptTabs();
      console.log(this.hiddenMenuItems);
    }
  }

  constructor(private renderer: Renderer) { }
  ngOnInit() {

  }

  adaptTabs() {

    const primaryWidth = this.tabPanel.nativeElement.offsetWidth;
    let stopWidth = this.tabmore.nativeElement.offsetWidth;

    this.tabItems.forEach((element, index) => {
      if (primaryWidth >= stopWidth + element.nativeElement.offsetWidth) {
        this.hiddenMenuItems.splice(this.hiddenMenuItems.indexOf(index), 1);
      } else {
        // this.renderer.setElementAttribute(element.nativeElement, 'hidden', 'true');
        if (!this.hiddenMenuItems.includes(index)) {
          this.hiddenMenuItems.push(index);
        }
      }
      stopWidth += element.nativeElement.offsetWidth;
    });
  }

  ngAfterViewInit() {
    // See https://plnkr.co/edit/1XhUD6jQ4otDx12LsN5b?p=preview (unidirectional-data-flow-violation error)
    setTimeout(_ => {
      this.adaptTabs();
    });
    console.log(this.hiddenMenuItems);
  }
}
