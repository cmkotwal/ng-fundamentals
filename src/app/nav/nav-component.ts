import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { EventService, ISession } from "../events";
@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }

      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }

      li > a.active {
        color: #f97924;
      }
    `,
  ],
})
export class NavBar {
  searchValue: string = "";
  foundSession: ISession[] | any;
  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  searchTerm(searchValue: any) {
    this.eventService.searchSession(searchValue).subscribe((sessions) => {
      this.foundSession = sessions;
      console.log(this.foundSession);
    });
  }
}
