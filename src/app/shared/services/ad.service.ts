import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from '../../adbanner/hero-job-ad.component';
import { HeroProfileComponent } from '../../adbanner/hero-profile.component';
import { AdItem } from '../../adbanner/adconfig/ad-items';

@Injectable({
    providedIn: 'root'
})
export class AdService {
    getAds() {
        return [
            new AdItem(HeroProfileComponent, { name: 'Bombasto', bio: 'Brave as they come' }),
            new AdItem(HeroProfileComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),
            new AdItem(HeroJobAdComponent, {
                headline: 'Hiring for several positions',
                body: 'Submit your resume today!'
            }),
            new AdItem(HeroJobAdComponent, {
                headline: 'Openings in all departments',
                body: 'Apply today'
            }),
        ];
    }
}
