import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()
export class SharingService{

    private dataSource = new BehaviorSubject('default message');
    currentData = this.dataSource.asObservable();
    constructor(){}

    changeData(data:string)
    {
        this.dataSource.next(data);
    }

}