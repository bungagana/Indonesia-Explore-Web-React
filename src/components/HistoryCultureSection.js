import React, { useState } from 'react';
import './css/History.css';

const historyTimeline = [
    {
        date: '1602',
        title: 'Pendirian VOC',
        description: 'Vereenigde Oostindische Compagnie (VOC) didirikan oleh Belanda untuk memonopoli perdagangan rempah-rempah di Nusantara. VOC menjadi alat utama kolonialisasi Belanda di Indonesia.',
        image: 'https://soscili.my/wp-content/uploads/2019/01/VOC_Melaka1.jpg'
    },
    {
        date: '1800',
        title: 'Pembubaran VOC dan Kolonialisme Belanda',
        description: 'Setelah bangkrut, VOC dibubarkan dan seluruh asetnya diambil alih oleh pemerintah Belanda, menjadikan Indonesia sebagai koloni resmi Belanda hingga awal abad ke-20.',
        image: 'https://th.bing.com/th/id/OIP.C8a4W73tVziopGVBeILRmgAAAA?rs=1&pid=ImgDetMain'
    },
    {
        date: '1908',
        title: 'Kebangkitan Nasional Indonesia',
        description: 'Kebangkitan nasional dimulai dengan berdirinya Budi Utomo, organisasi yang didirikan oleh kaum intelektual Indonesia, menjadi tonggak penting dalam perjuangan melawan penjajahan.',
        image: 'https://img.inews.co.id/media/822/files/inews_new/2023/05/16/latar_belakang_hari_kebangkitan_nasional.jpg'
    },
    {
        date: '1928',
        title: 'Sumpah Pemuda',
        description: 'Para pemuda dari berbagai wilayah Indonesia mengikrarkan Sumpah Pemuda, menyatakan satu tanah air, satu bangsa, dan satu bahasa: Indonesia.',
        image: 'https://th.bing.com/th/id/OIP.hONMpsLhyGdzv3oGGJoQsQHaE1?rs=1&pid=ImgDetMain'
    },
    {
        date: '1942-1945',
        title: 'Penjajahan Jepang',
        description: 'Selama Perang Dunia II, Jepang menggantikan Belanda sebagai penjajah dan menguasai Indonesia. Masa ini dikenal dengan kekerasan dan penderitaan rakyat Indonesia.',
        image: 'https://th.bing.com/th/id/OIP.fltup4PGfelzChjPvQ9lsgAAAA?rs=1&pid=ImgDetMain'
    },
    {
        date: '1945',
        title: 'Peristiwa Rengasdengklok',
        description: 'Sehari sebelum proklamasi, Soekarno dan Hatta dibawa ke Rengasdengklok oleh para pemuda untuk segera memproklamasikan kemerdekaan, mendesak agar kemerdekaan tidak ditunda lagi.',
        image: 'https://th.bing.com/th/id/OIP.ZkWwpr_lJmTFvnaQtgsgKwHaEF?rs=1&pid=ImgDetMain'
    },
    {
        date: '17 Agustus 1945',
        title: 'Proklamasi Kemerdekaan',
        description: 'Indonesia memproklamasikan kemerdekaannya pada 17 Agustus 1945, menandai berakhirnya penjajahan dan awal kemerdekaan. Proklamasi dibacakan oleh Soekarno dan disaksikan oleh para tokoh nasional lainnya.',
        image: 'https://qph.fs.quoracdn.net/main-qimg-82c10ef47d5ae23f5f9c0cbdf0e09de5'
    },
    {
        date: '1945-1949',
        title: 'Revolusi Nasional Indonesia',
        description: 'Setelah proklamasi, Indonesia mengalami masa revolusi melawan Belanda yang berusaha kembali menjajah. Revolusi ini berlangsung hingga Belanda mengakui kemerdekaan Indonesia pada 27 Desember 1949.',
        image: 'https://th.bing.com/th/id/OIP.KQc0xcdiTN5sc7-VpPcduAHaEK?rs=1&pid=ImgDetMain'
    }

];

const HistoryCultureSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <section id="history" className="education-section">
            <div className="container">
                <h1>Alur Kemerdekaan Indonesia</h1>
                <div className="timeline">
                    {historyTimeline.slice(0, isExpanded ? historyTimeline.length : 2).map((event, index) => (
                        <div key={index} className="timeline-event">
                            <div className="timeline-event-image">
                                <img src={event.image} alt={event.title} />
                            </div>
                            <div className="timeline-event-text">
                                <h2>{event.date}</h2>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="load-more" onClick={handleToggle}>
                    {isExpanded ? 'Sembunyikan' : 'Lihat'}
                </button>
            </div>
        </section>
    );
};

export default HistoryCultureSection;