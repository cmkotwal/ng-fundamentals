import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../shared";
import { AuthService } from "src/app/user/auth.service";
import { VoterService } from "./voter.service";

@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html",
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession | any;
  @Input() filterBy: string | any;
  @Input() sortBy: string | any;
  visibleSession: ISession | any;

  constructor(public auth: AuthService, private voterService: VoterService) {}

  ngOnChanges() {
    if (this.sessions) {
      this.filterStep(this.filterBy);
      this.sortBy === "name"
        ? this.visibleSession.sort(SortByAscending)
        : this.visibleSession.sort(SortByVotes);
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVote(session, this.auth.currentUser.userName);
    }
    if (this.sortBy === "voters") {
      this.visibleSession.sort(SortByVotes);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(
      session,
      this.auth.currentUser.userName
    );
  }

  filterStep(filter: any) {
    if (filter === "all") {
      return (this.visibleSession = this.sessions.slice(0));
    } else {
      this.visibleSession = this.sessions.filter((session: any) => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

function SortByAscending(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function SortByVotes(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
