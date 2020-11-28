import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform( Lista:Lista[], completada: boolean = true): Lista[] {
   
    return Lista.filter(lista =>  lista.terminada === completada);
  }

}