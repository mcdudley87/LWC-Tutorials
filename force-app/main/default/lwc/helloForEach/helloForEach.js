import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts = [
        {Id:1, 
        Name: 'Quentin Quisling',
        Title: 'VP of Engineering'
        },
        {Id:2, 
        Name: 'Anon E. Muss',
        Title: 'Jack of Alltrades'
        },
        {Id:3, 
        Name: 'Seymour Koontz',
        Title: 'OBGYN'
        },
        {Id:4,
        Name:'Jennifer Anigston',
        Title:'VP of Marketing'
        },
        {Id:5,
        Name:'Deepika Khanna',
        Title:'CTO'
        }
    ]
}