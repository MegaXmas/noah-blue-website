import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'uppercaseTransformPipe'
})

export class UppercaseTransformPipe implements PipeTransform {

    sanitizer = inject(DomSanitizer)


    transform(text: string): string {
        if (!text) return text;

        const withUppercase = text.replaceAll(/\[up\](.*?)\[\/up\]/g, 
            (match, text) => { return text.toUpperCase(); }
        );

        console.log('After uppercase:', withUppercase);

        return withUppercase;
    }
}