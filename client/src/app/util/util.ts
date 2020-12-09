import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

class Util {

    agregarIcono(nombre: string, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            nombre,
            sanitizer.bypassSecurityTrustResourceUrl(`https://ebeteam.s3.us-east-2.amazonaws.com/assets/img/${nombre}.svg`));
    }

}