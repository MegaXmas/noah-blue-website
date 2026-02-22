import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'textAestheticPipe',
})

export class TextAestheticPipe implements PipeTransform {

    private readonly sanitizer = inject(DomSanitizer);

    transform(text: string): SafeHtml {
        const withLowercaseText = text.toLowerCase();

        const withInformalText = withLowercaseText
            .replaceAll("'re", "r")
            .replaceAll("’re", "r")  
            .replaceAll("'", "")     // straight apostrophe
            .replaceAll("’", "")    // curly apostrophe

            .replaceAll(` youre `, ' ur ')
            .replaceAll(' you ', ' u ')
            .replaceAll(' are', ' r')
            .replaceAll(' your', ' ur')
            .replaceAll(' why ', ' y ')
            // .replaceAll(' be ', ' b ')
            .replaceAll(' because', ' bcuz')            
            .replaceAll(' cause', ' cuz')
            .replaceAll(' i dont know', ' idk')
            .replaceAll(' really', ' rly')
            
            ;

        
        const withUppercaseText = withInformalText.replaceAll(
            /\[up\](.*?)\[\/up\]/gs,
            (match, content) => content.toUpperCase()
        );
        
        const withAestheticText = withUppercaseText
            .replaceAll('^^', '<i><b>')
            .replaceAll('^/^', '</i></b>')
            .replaceAll('^!^', '<strong><em>')
            .replaceAll('^/!^', '</em></strong>')
            
            ;

        const withStyles = withAestheticText
            .replaceAll(/\[alert\](.*?)\[\/alert\]/gs, '<span class="alert">$1</span>')
            .replaceAll(/\[tangent\](.*?)\[\/tangent\]/gs, '<span class="tangent">$1</span>')
            ;    

        return this.sanitizer.bypassSecurityTrustHtml(withStyles);
    }
}