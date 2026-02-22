// import './config.js';
// import SimpleBar from 'simplebar';
// import GLightbox from 'glightbox';
// import Rellax from 'rellax';
// import MicroModal from 'micromodal';
// import LazyLoad from "vanilla-lazyload";
// import { tns } from 'tiny-slider/src/tiny-slider';
// import './modules/bootstrap-modules.js';
// import "./modules/highlight";
// import './modules/smooth-scroll.js';
// import './modules/scroll-to-top.js';
// import './modules/timezone-offset.js';
import { initTestimonialsSlider } from './modules/testimonials-slider';
import { qs, qsa } from './modules/utils';
import '../scss/ambitop.scss';

// on(document, "DOMContentLoaded", () => {
//     console.log(qs("body"));

//     let message: string = "Hello, World!";
//     console.log(message);
// });

// if (!qs('.modified-test011v1')) {
//     const test011v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test011v1');
//             }
//         });

//         const main = '.elementor-element-9601952';

//         // console.log(qsa(main));

//         if (qs('.elementor-element-34fe036')) {
//             qs('.elementor-element-34fe036').id = '__contact-form';
//         }

//         let html = `
//         <div class="__new-div">
//             <div>
//                 <a href="#__contact-form" class="elementor-button elementor-button-link elementor-size-md">Jetzt Kontakt aufnehmen</a>
//             </div>
//             <i aria-hidden="true" class="fas fa-phone-alt"></i>
//             <span>
//                 <p>Oder einfach direkt anrufen</p>
//                 <a href="tel:+4933759177600">+49 (0)3375 91 776 00</a>
//             </span>
//         </div>
//         `;

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 qs(main).insertAdjacentHTML('afterend', html);
//             }
//         }, 500);
//     };

//     test011v1();
// }

// <span>Verifizierte Bewertung von <a href="https://www.provenexpert.com/de-de/ambitop-top-terrassendach-gmbh-co-kg/">provenexpert.com</a></span>

const testimonials: { stars: number; date: string; name: string; comment: string }[] = [];

testimonials.push({
    stars: 5.0,
    date: '28.08.2024',
    name: 'Anonym',
    comment:
        'Schnelle, saubere Montage, freundliche Mitarbeiter, Termintreue und Zuverlässigkeit, gute Beratung durch Herrn Zimmermann, sehr gute Qualität des Materials, ich bin sehr zufrieden',
});

testimonials.push({
    stars: 5.0,
    date: '28.08.2024',
    name: 'Anonym',
    comment:
        'Es hat alles sehr gut geklappt. Von der Terminvergabe über die Beratung bis hin zur Durchführung. Es waren alles top Leute und die Qualität ist sehr gut, soweit wir es nach der kurzen Zeit beurteilen können. Wir würden Ambitop auf jeden Fall weiterempfehlen.',
});

testimonials.push({
    stars: 5.0,
    date: '28.08.2024',
    name: 'Anonym',
    comment:
        'Wir waren von Anfang zufrieden...von der ganz tollen Beratung bis zum Aufbau. Jeder einzelne Mitarbeiter war nett, hilfsbereit und zuverlässig. Ganz tolles Team',
});

testimonials.push({
    stars: 5.0,
    date: '14.02.2024',
    name: 'Anonym',
    comment: 'Tolles Team mit in allen Belangen sehr guter Leistungsausführung.<br>Vielen Dank',
});

testimonials.push({
    stars: 5.0,
    date: '07.02.2024',
    name: 'Bernhard O.',
    comment:
        'Super Beratung und Planung! Die Ausführung der Arbeiten sehr ordentlich und akkurat. Die beiden Monteure Basti und Fabi arbeiteten hervorragend, ordentlich und sauber. Wir sind absolut zufrieden und begeistert. Vielen Dank',
});

testimonials.push({
    stars: 5.0,
    date: '05.01.2024',
    name: 'Martin V.',
    comment:
        'Es stimmte einfach Alles!Das Beratungsgespräch war sehr sehr nett und es wurde alles so gemacht,wie es vorher abgesprochen war.<br>Die Termine wurden auch (zu unserer Freude)eingehalten!Die Monteure waren mehr als fleissig!Bei strömenden Regen und sehr starkem Wind verrichteten sie ihre Arbeit trotzdem.<br>Ein herzliches Dankeschön nochmal.Wir werden ihre Firma auf jeden Fall weiterempfehlen.Fam.Klügel aus Berlin',
});

testimonials.push({
    stars: 5.0,
    date: '28.04.2024',
    name: 'Axel W.',
    comment:
        'Super Beratung, tolles Team mit einer Termintreue die ich so noch nicht erlebt habe. Die Monteure sind sehr zuverlässig, pünktlich und freundlich. Erschwerend kam hinzu das der Kaltwintergarten in 6m Höhe montiert werden musste, aber auch dieser Umstand wurde von den Monteuren Rene` und Steffen und einem dritten dessen Name mir leider nicht genannt wurde mit Bravour gemeistert. Unser Wintergarten übertraf alle meine Erwartungen das Produkt ist absolut top. Ich werde Ambitop auf jeden Fall weiterempfehlen.',
});

testimonials.push({
    stars: 5.0,
    date: '19.04.2023',
    name: 'Anonym',
    comment:
        'Wir sind total begeistert! Vom Erstgespräch bis zur Fertigstellung lief einfach alles glatt. Man war stets über die aktuellen Arbeitsschritte informiert. Auch der Aufbau und die Montage vor Ort zeugten von sehr erfahrenen MItarbeitern! EINFACH TOP! Danke für Alles! Wir bleiben im Kontakt, wir haben noch einiges vor mit unserer Überdachung!',
});

testimonials.push({
    stars: 5.0,
    date: '25.03.2023',
    name: 'K.',
    comment:
        'Wir sind sehr zufrieden und froh diese Wahl getroffen zu haben. Von Anfang an, Termin, Beratung und bis zur Fertigstellung, einfach super. Diese fachliche Kompetenz, gleich zu Beginn, auf Grund der Lage und unsere Wünsche bzw. Gedankenwurde ausführlich beratend erklärt. Die Durchführung der Arbeiten erfolgte schnell und gut, eben Fachmann, kleine Einzelheiten wurden noch während der Fertigstellung erklärt bzw. abgesprochen. Dieses gesamte Team ist einfach weiter zuempfehlen.',
});

testimonials.push({
    stars: 5.0,
    date: '20.12.2023',
    name: 'Anonym',
    comment:
        'Gute Fachkräfte, die Arbeit geht zügig, ein durchdachtes Timing. Ich bin sehr zufrieden. Die Anlieferung hat auch gut geklappt. 👍',
});

testimonials.push({
    stars: 4.98,
    date: '20.10.2023',
    name: 'Gertrud und Friedrich E.',
    comment:
        'Kompetentes, aufgeschlossenes und sehr freundliches Personal bei Beratung, Aufmaß, Feinmaß und Bauausführung. In der Bauausführung werden die wichtigsten Abschnitte erklärt und auf Nachfragen kompetente Erläuterungen gegeben. Hilfestellungen und kompetente Ratschläge zu Arbeiten die vom Bauherren auszuführen sind. Freundliche Ansprechpartnerinnen und Ansprechpartner in der Verwaltung.',
});

testimonials.push({
    stars: 4.98,
    date: '21.08.2023',
    name: 'I.',
    comment:
        'Haben vor über 10 Jahren den Wintergarten aufstellen lassen und sind seit her voll zufrieden. Auch bei Problemen nach der Garantiezeit wurde schnell und unkompliziert sowie sehr kulant geholfen. Würde wieder mit der Firma bauen und kann die Anditop nur weiter empfehlen. Macht weiter so 👍.',
});

testimonials.push({
    stars: 5.0,
    date: '21.02.2023',
    name: 'Anonym',
    comment:
        'Die Monteure leisten super Arbeit ! D.h. Flexibilität , bei Problemen finden Sie immer eine Lösung , konstruktives mitdenken, Handeln. Die Kundenzufriedenheit ist den Monteuren wichtig. Wir als Kunden sagen nochmals Danke !',
});

testimonials.push({
    stars: 5.0,
    date: '18.02.2023',
    name: 'Beate K.',
    comment:
        'Sehr gute Beratung, Planung und Umsetzung unserer Wunschprojekte. Die uns bekannten Mitarbeiter alle sehr freundlich, höflich und kompetent. Die angekündigten Termin wurde eingehalten und die durchgeführten Arbeiten wurden sauber, ordentlich und innerhalb der vorgeplanten Zeit ausgeführt. Nach dem Abschluss der Arbeiten wurde die Baustelle gesäubert und ohne "Baureste/Restmüll" übergeben. Diese Leistungen haben ihren Preis verdient. Gerne wieder mit dieser Firma',
});

testimonials.push({
    stars: 5.0,
    date: '07.07.2023',
    name: 'C.',
    comment:
        'Wir sind begeistert! Von A bis Z eine TOP Beratung, auch über die eigene Dienstleistung hinaus - Hinweise auf gesetzliche Regelung und Versicherungen- und Service. Klar gibt es andere Anbieter zu einem anderen Preis. Uns war aber das Gesamtpaket, Vertrauen ins Ergebnis und kompetente Ansprechpartner wichtig. Eben einfach ein gutes Bauchgefühl.',
});

if (!qs('.modified-test011v2')) {
    const test011v2 = () => {
        // workaround for chrome on iOS
        const interval0 = setInterval(() => {
            if (qs('body')) {
                clearInterval(interval0);
                qs('body').classList.add('modified-test011v2');
            }
        });

        const main = '.elementor-element-9601952';

        // console.log(qsa(main));

        if (qs('.elementor-element-34fe036')) {
            qs('.elementor-element-34fe036').id = '__contact-form';
        }

        let html = `
        <div class="__new-div">
            <div>
                <a href="#__contact-form" class="elementor-button elementor-button-link elementor-size-md">Jetzt Kontakt aufnehmen</a>
            </div>
        </div>
        `;

        const interval1 = setInterval(() => {
            if (qs(main)) {
                clearInterval(interval1);

                qs(main).insertAdjacentHTML('afterend', html);
            }
        }, 500);

        const slider = '.elementor-element-18912cc';

        const interval2 = setInterval(() => {
            if (qs(slider)) {
                clearInterval(interval2);

                initTestimonialsSlider(testimonials, slider);

                // qs(slider).insertAdjacentHTML('afterend', html);
            }
        }, 500);
    };

    test011v2();
}
