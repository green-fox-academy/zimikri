'use strict'

import Carrier from './Carrier';
import F16 from './F16';
import F35 from './F35';

const midway = new Carrier('Midway', 2500, 5000);
midway.add(new F35);
midway.add(new F35);
midway.add(new F35);
midway.add(new F16);
midway.add(new F16);
// midway.fill();

const geraldRFord = new Carrier('Gerald R. Ford', 2500, 500000);
geraldRFord.add(new F35);
geraldRFord.add(new F35);
geraldRFord.add(new F35);
geraldRFord.add(new F16);
geraldRFord.add(new F16);
// geraldRFord.fill();

printCarriersStatus(midway, geraldRFord);
fight(midway, geraldRFord);

function fight(attacker: Carrier, victim: Carrier) {
    try {
        attacker.fight(victim);
        
    } catch (error) {
    
        if (error.type == 'NoAmmo') {
            console.log('\n\nAfter fight:');
            printCarriersStatus(attacker, victim);
            console.log(error.message);
            
            // Fight back
            if (victim.health > 0 && victim.ammo > 0 && attacker.health > 0)
                fight(victim, attacker);
        } else if (error.type == 'EnemyDestroyed') {
            console.log('\n\nAfter war:');
            printCarriersStatus(attacker, victim);
            console.log(error.message);
        } else {
            console.log(error.message);
        }
        
    }
}

function printCarriersStatus(attacker: Carrier, victim: Carrier) {
    attacker.getStatus();
    victim.getStatus();
}