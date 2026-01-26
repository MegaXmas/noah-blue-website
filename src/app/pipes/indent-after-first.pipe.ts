// !DEPRECATED

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'indentAfterFirstPipe'
})

export class IndentAfterFirstPipe implements PipeTransform {
    transform(value: string): string {
        const firstLineIndented = `&#32` + value;
        return firstLineIndented.replaceAll(`\n`, `\n&#xa0&#xa0&#xa0 `);
    }
}