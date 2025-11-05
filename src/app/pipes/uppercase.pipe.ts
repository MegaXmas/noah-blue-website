import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'uppercaseTransform'
})

export class UppercaseTransformPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return value;

        return value.replaceAll(/\^UP\^(.*?)\^\/UP\^/g, (match, text) => {
            return text.toUpperCase();
            }
        );
    }
}