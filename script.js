window.onload = function() {
    var programs = [
        { category: 'PINK', name: 'Pink Movies', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=418' },
        { category: 'PINK', name: 'Pink Action', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=421' },
        { category: 'PINK', name: 'Pink Comedy', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=425' },
        { category: 'PINK', name: 'Pink Sci-Fi & Fantasy', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=420' },
        { category: 'PINK', name: 'Pink Premium', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=415' },
        { category: 'PINK', name: 'Pink World Cinema', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=470' },
        { category: 'PINK', name: 'Pink Film', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=417' },
        { category: 'CINESTAR', name: 'Cinestar TV', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=371' },
        { category: 'CINESTAR', name: 'Cinestar Fantasy', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=600' },
        { category: 'CINESTAR', name: 'Cinestar TV Comedy', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=665' },
        { category: 'CINESTAR', name: 'Cinestar Action & Thriller', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=372' },
        { category: 'STAR', name: 'TV 1000 (Star)', link: 'https://mojtv.net/kanal/tv-program/378/tv-1000' },
        { category: 'STAR', name: 'Star Movies', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=403' },
        { category: 'FILM', name: 'FilmBox Premium', link: 'https://tvprofil.com/tvprogram/#!kanal=filmbox-premium' },
        { category: 'FILM', name: 'Film Klub', link: 'https://www.navidiku.rs/tv-program/film-klub' },
        { category: 'FILM', name: 'Fox Movies', link: 'https://naslovi.net/tv-program/star-movies/' },
        { category: 'FILM', name: 'Sci-Fi Channel', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=119' },
        { category: 'HBO', name: 'HBO', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=366' },
        { category: 'HBO', name: 'HBO2', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=367' },
        { category: 'HBO', name: 'HBO3', link: 'https://mojtv.net/m2/tv-program/kanal.aspx?id=515' }
    ];

    var programList = document.getElementById('program-list');

    programs.forEach(function(program) {
        var link = document.createElement('a');
        link.href = program.link;
        link.textContent = program.category + ' - ' + program.name;
        programList.appendChild(link);
        programList.appendChild(document.createElement('br'));
    });
};
