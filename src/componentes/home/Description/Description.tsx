
"use client"

import Image from 'next/image'
import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './Description.module.sass'


const PLACEHOLDER = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAGxAooDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAIBAwQFCP/EABgQAQEBAQEAAAAAAAAAAAAAAAABAhEx/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAECESH/2gAMAwEAAhEDEQA/APzIA+o9Chka1FVl0y55dIqV0y65co65ViumXXLll1yM10yvLnl0y0zXTK8oyvKsukXERcaiKi4iLioqLiIqNIuKiIuKjYqJioDY1kaqEayNAABlACsrG1iIypqqmgypqqmoJqaqprNEVNVU1KqKirqKyiK56dK56ZquekaXpGmKOenPTppz0zRy056dNOemajnpx066ctMjnpzrppzrNWI0mq0mudbiQHKtACAQI1BrYxsdIlVFRMVHWM1UVExUbjNXF5RF5VFxUTFRRUbGRsVVRSYpRsCAAAj54DD3tjWRrUVWXSOeV5aSuuXXLll1yMV0y65csumVZdMumXPLplpl0yvLnl0isrjpHOLjURcVExUVFxUTFRUVFRMVGkVGxjQapLYI06CjesAAGUQrAqDKmtrKgypramoMqaqpqCKirqKyJqKqpqCNOel1FZqudRpdRpijlpGl6c9Mo56c9OmnPTNHLTlp125aZo5aRV6RWKsRpFXUVzrcYA51oAZUIDcRrYxsdIlbFxEXHSM1SomKjcZXFxzi40i4uIiooqKiYqKqoqJjYo1rCA0AR8/oxsYe8UlsWCsumXPLplorrl0y5ZdcqxXTLrlyy6ZVl0y6Zc8umVZdMriMrjTNdIvLnFxYi4uIio0i4uIioqLioiKioqKiWxRUGNEb0YKN6MAb1gIDG1gjKyjKgyprayoJqaqpqCKmqqKyqairqKzURpzq9IrNVFc9Olc9M0c9OenTTnplHPTlp0056Zo5ac9OmnLTI56RV6c6xViair0iuVdIwGVyqhARWgNRGhB1gqKiYqOsZqorKYrLcYq4uIi40LioiKiouNiYqKqopEVAUMaoHQB88Z1rl17WxqWtRVR0y5R0y0jrl1y45dcqzXXLrlyyuKy65dMueXTLUZdMrjnlcVHTK45xcaZdIuOcXFRcVExUUXGxMVGkVGxMaIqKiG9VFDAGjAGs6ADKWiIysoyisqa2pqIypramsjKiqqKlVNRV1FZojTnV1FZoiuenTTlpmiK56dNOemajnpz0vTnpijlpz06actM0Rpzq9IrFWJqKqprlp0jGFHK1oAZCNY1uUI1jXXKNiomKjrGauNnqYqNxlcXERUaRcVERcUVFRMVFFNTFRRrUt6qtOsBHgGNcXtbGxLVlFReXOLy2rrl1y5ZdMqxXbLplyjplYzXXLplyy6ZajLpFxzi4qOsXHOLjUZdIqIioqOkVERUaFxURFRUXGxEqlRrep60FHWHRG9b1gB0GdBrKMtAqaWsQZWUrKgypramoJqKqprImo0qo0zRFRV1FZojTnpenOs0Rpz06actM1EactumnLTFEactOmnLTNEVzq6iudaiaiqqa5arpGAOSgABAWDWxhHXNRqolsdoi4qIi46RmrioiKjSLi45xcVFxURFRVW1ClGtYA0A6PntZ0efr1talrUqqi8ucXluUdcuuXGOuWma7R0y45rrlWa65q81yzXSNRmusdI5ZdIrLpFxzi40OkVERUqo6RURFStIuKiJVKipVSobFFiet6IrozoDRnTqjRnREbamjKBWUrKgyspWVBlqKq1FQZU1tTWRNRVaqKzRNRVVGmaI0iqqNM0Rpz0vTnpmojTlpenPTNHPblp0056YqIqNKqK56rpEVNVUuOq3ABhQAAACNY1vNRrYyDvmoqLiIqOkSrioiKjcZdIqIio0LioiVUoKjUxqiut6lsFV06wUeDoweTr0q6MbGpVUrNQ2Okqu2a6Zccuua11mu2XXNccukrUZdcumXLLplqMuuV5c81cVHWLlcs1caR1lVHOVcVFyqjnKuVUXKqVEbK0jo1ErVF9ajrRFNS3oN6dZ06DejOh1DrBgDBKBWWlqagypramoMqa2o1WaMqKqorNE1GlaqKzRFRpdc9M1Eac9L056Zo56c9OmnLTNHPTnp0056YtIioqqiuWq3E1LaxxroAIAAAABAWDWsbHbNRsVEtjtKi4qOcXG4y6SqjnKqNC5VSoioouVUc4roK61PTqqpvUnTo8DU9HgmnoUqIbK6Si42JjXSVXWV0zXHNdcukqO2a6ZrjmuuVZrtl0zXHNdJWoy6x0zXKVcrSOsq5XKVcrSOkXK5xUVHSKiJVRUXKqIlVGhcbERUEV1vU9aqKOpb0FdOp6dBXWdYzoN6zrDqAyjKIVNKyoMqa2ptQZaitqazRlRVVGqzROqitqazRNc9L056ZojTnpenPTNRGnLS9OemKiNOel6rnpi1YjSKrSK46rpGVhRzbAAAAAAAAI2Ma6ZqNbGQds1FRUSqOsRcqo5yqlaHSKjnKqVRcreolb0F9b1HW9UV06np0Hh6dZ0fM679X1sQ2VvOhcqoiKlds1XTLpmuMrpmuso7ZrrmuGa65rcrNdo6ZrlmrzVjNds1crlmuma1EdYuVyi40jpKuVzi5WkXKuOcqpVFyqlRKqKi5Wyo6rqiut6nrRFdag6ovojp0RR1PToNZ0Z1BrKxlqBam0tZURlZSptQZU1tqKgyotVais0TU1tTWRGqjStVz0zURpGlVz1WaI056q9OeqxUc9I0vTnpy1WonSKrSK42ukZQEaAAAAAAAACAso1rGx2zUbGxLXWVFyqlRK2NwdIqVzlV1oXK3qJVdUU1PQFDOnQeEB8x063rUkF6uVUqIqV1zpXSLy5SrzXeVXfNdc1wzXTNdJUrvmuma45rpmtSsu2avNcs10lajLrKuVyzVytI6Srlc5VSqOkqpUSqlVFyqlc5VStdR062VErVFytR1vQWdT06Irp1PToK6JBGnWdYBaylqbUG2ppayoFTaWptRGWpramsiam1tqKlGVGqq1zrNGVz1Vac6zUTXPS9Vz0xRGq5aXqo0xaiNOdXpzrjqtxNS2srk6RgCqAAAAAAAAAARrGxvNGtTGu2aimxMa6SouN6nrZWuqqKRFdUV06nreqK6dT06Dydb1g+crRjUVsbKlsJeNR0is1zlXK750065rrmuOa6ZrtKjvmuua4Zrpmtysu0rpK45q81qVl2lXK5SrlalHWVcrlKqVUdJVyucqpWkdJWyolVKouVsqOtlVF9b1HW9BTepOqimp6dBTGdZ06K6y1nWJ1G2sZ1iDbU2lqbQKm0rLUCotbai1lGWprbUWsjNVFbU1midVzqtVGqzURquequueqzaiNOel6rnpz1VidOel6c64arcZU1VTWW4AKoAAAAAAAAAAADWxMa65qNUmNdZRUGNblVsV1DZWui+iei9FdOsDq8ecB89AAGjI1FioqVEVK1m8bjpmuua4Suua9GaO+a6Zrhmuua6So7ZrpK45rpmtSsusq5XKVcrUqOsqpXOVcrXUdJVSucqpV6jpKqVzlVKvRfW9RKqVRXW9TK3qorrU9Ogrp1PW9BvRPTojesZ06Des6zrOohay0tTagVNpay1BlqaWprNQtRa21FqDKjVVa52s0Za56qtVztZqJ1XOq1UarFqI1UWqqNVy1WomoqqhxbjGNrFbAAAAAAAAAAAAAACAsvBrWDrmoqNS10lFDGtSqdawXqtDp06OIDxIAANjAGtjGxGouV0zXGOma64rTtmuma45rpmu0qO+a6Zrjmuma3KjrK6SuUq5WpUdJVyucqpWusukq5XOVUqi5VSojZWujpK2VErZVRcreo63p1F9Op63oN6dZ06dG9EgjTrOs6DbWWs6y1OhaynWUQtTaWptZ6FqaWptQZamlqbWUZqotbajVZom1Gqqueqzaia56qtVzrFqJtRVaqK4ar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'


export const Description = () => {

    const [hasBorder,setBorder] = useState(false)


    const handleClick = () => setBorder(!hasBorder)


    const cx = classNames.bind(styles)


    const buttonStyles = cx('Description__button',{
        'Description__button--border': hasBorder
    })

    return(

    <section className={styles.Description}>

        <button onClick={handleClick} className={buttonStyles}>

            <div className={styles.Description__imageContainer}>

                <Image
            
                    src="/images/description.jpeg" 
        
                    alt="products marketplace" 

                    fill

                    placeholder="blur"

                    blurDataURL={PLACEHOLDER}
                    
                />

            </div>

        </button>

            <div className={styles.Description__text}>

            <h2>Bring the future today</h2>

            <p>Future World: Your Gateway to Tomorrow's Tech! Drive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>

            </div>


        </section>
    )
}

