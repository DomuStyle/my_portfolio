import { Component, ViewChild, viewChild } from '@angular/core';
import {Overlay, OverlayModule} from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { ProjectdetailsComponent } from '../projectdetails/projectdetails.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [OverlayModule, PortalModule, ProjectdetailsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @ViewChild(CdkPortal) portal!: CdkPortal;

  constructor(private overlay: Overlay) {

  }

  openModal() {
    const overlayRef = this.overlay.create();
    overlayRef.attach(this.portal);
  }
}
