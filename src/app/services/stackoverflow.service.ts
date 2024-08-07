import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IStackOverFlowPost } from '../model/stackoverflow';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowService {
  constructor(private customServices: CustomService) { }
  url: string = environment.apiUrl;
  getStackPosts(pageSize: number = 50): Observable<IStackOverFlowPost[]> {
    return this.customServices.getRequests<IStackOverFlowPost[]>(this.url + `StackOverflow/latestQuestions?pageSize=${pageSize}`);
  }

}

