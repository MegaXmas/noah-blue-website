// kebab-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textAestheticPipe',
})

export class TextAestheticPipe implements PipeTransform {

    transform(text: string): string {
        return text.toLowerCase().
                    replaceAll('^^', '<i><b>').
                    replaceAll('^/^', '</i></b>').
                    replaceAll('^!^', '<strong><em>').
                    replaceAll('^/!^', '</em></strong>');

    }
}