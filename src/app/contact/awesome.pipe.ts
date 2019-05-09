import {Pipe, PipeTransform} from '@angular/core';

/**
 * Pipe to transform into Title Case
 * useage: {{contact.name | titlecase}}
 */
@Pipe({ name: 'awesome' })
export class AwesomePipe implements PipeTransform {
  transform(phrase: string) {
    return phrase.toLowerCase().split(' ').map(value => {
      return value.charAt(0).toUpperCase() + value.substring(1);
    }).join(' ');
  }
}
