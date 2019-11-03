import { InjectionToken } from '@angular/core';
import { Herobis } from '../interfaces/hero-bis';
import { HeroBisService } from './hero-bis.service';

export const RUNNERS_UP = new InjectionToken<string>('RunnersUp');

export function runnersUpFactory(take: number) {
    return (winner: Herobis, heroBisService: HeroBisService): string => {
        return heroBisService
            .getAllHeroes()
            .filter(hero => hero.name !== winner.name)
            .map(hero => hero.name)
            .slice(0, Math.max(0, take))
            .join(', ');
    };
}
