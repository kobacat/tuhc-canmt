module.exports = {
    title: "Cool and New Homestuck Music-ifier",
    summary: "Replaces Flash Music with the remade Flash music from the Cool and New Homestuck albums, made by the Cool and New Music Team.",
    author: "koba (<a href='https://kobacat.com/'>kobacat.com</a>), (<a href='https://twitter.com/kensabrush'>@kensabrush</a>)",
    modVersion: 0.1,

    description: `<h3>What is this mod?</h3>
    
    <p>This project is made to give an alternate experience when watching the flashes of Homestuck.</p>
    <p>The Homestuck fan-music group, the Cool and New Music Team, made a series of three albums back in 2016, attempting to rescore every single flash. These albums, the 'Cool and New Homestuck' albums, were all made by the collective effort of dozens of different people in the Homestuck community.</p>

    <h3>Ok, so which flashes does it change?</h3>

    <p>Every single one.<p>

    <h3>What else does the mod change about the flashes, like the visuals?</h3>

    <p>The mod doesn't change anything but the music. The visuals from every flash will stay the exact same, and should work fine with any other mods that may modify them.</p>

    <h3>Does the mod do anything else?</h3>

    <p>The mod adds additional credits to pages that list sound credits, mainly to credit the musicians that rescored the flashes. This doesn't remove the credits from the original musicians, though.</p>
    <p>Also, the mod adds the albums to the Music page of the collection. Does it, though? I haven't even gotten that far yet!</p>

    <h3>Why should I use this over the original music?</h3>

    <p>i dunno dude, it's, like, ur choice, you know?</p>`,

    routes: {
		// ACT 1
        'assets://storyfiles/hs2/00137/00137.mp3': './music/00137/00137.mp3', // Sburban Jungle (Brief Mix)
        'assets://storyfiles/hs2/00222/00222.mp3': './music/00222/00222.mp3', // Aggrieve (Violin Refrain)
		'assets://storyfiles/hs2/00246/00246.mp3': './music/00246/00246.mp3', // Sburban Cascantdown
        'assets://storyfiles/hs2/10246/10246.mp3': './music/10246/10246.mp3', // Sburban Cascantdown
		// ACT 2
        'assets://storyfiles/hs2/00253/afterthought-showtime_piano.mp3': './music/00253/afterthought-showtime_piano.mp3', // Showtime (Piano Refrain)
        'assets://storyfiles/hs2/00644/00644.mp3': './music/00644/00644.mp3', // John Sleeps / Skaian Magicant
        'assets://storyfiles/hs2/00651/00651.mp3': './music/00651/00651.mp3', // John Sleeps / Skaian Magicant
        'assets://storyfiles/hs2/00665/00665.mp3': './music/00665/00665.mp3', // Upward Movement (Dave Owns)
        'assets://storyfiles/hs2/00755/00755.mp3': './music/00755/00755.mp3', // Sburban Reversal (Original)
        'assets://storyfiles/hs2/00757/00757.mp3': './music/00757/00757.mp3', // Explore
		// ACT 3
		'assets://storyfiles/hs2/00833/00833.mp3': './music/00833/00833.mp3', // Dead Shuffle
		'assets://storyfiles/hs2/pony/pony.mp3': './music/pony/pony.mp3', // Pony Chorale
		'assets://storyfiles/hs2/00948/00948.mp3': './music/00948/00948.mp3', // Revelawesome
		'assets://storyfiles/hs2/00979/00979.mp3': './music/00979/00979.mp3', // Harlequin
		'assets://storyfiles/hs2/00980/00980_1.mp3': './music/00980/00980_1.mp3', // An Unbreakable Union
		'assets://storyfiles/hs2/00980/00980_2.mp3': './music/00980/00980_2.mp3', // Carefree Victory
		'assets://storyfiles/hs2/01026/01026.mp3': './music/01026/01026.mp3', // The Beginning of Something Really Excellent
		'assets://storyfiles/hs2/01070/01070.mp3': './music/01070/01070.mp3', // Versus
		'assets://storyfiles/hs2/01073/01073.mp3': './music/01073/01073.mp3', // Ballad of Awakening
		'assets://storyfiles/hs2/01149/01149.mp3': './music/01149/01149.mp3', // Sburban Jungle
		'assets://storyfiles/hs2/01267/01267.mp3': './music/01267/01267.mp3', // Three in the Morning
		// ACT 4
		'assets://storyfiles/hs2/01407/01407.mp3': './music/01407/01407.mp3', // Endless Climb
		'assets://storyfiles/hs2/01641/01641.mp3': './music/01641/01641.mp3', // Atomyk Ebonpyre
		'assets://storyfiles/hs2/01668/01668.mp3': './music/01668/01668.mp3', // Black
		'assets://storyfiles/hs2/01801/01801.mp3': './music/01801/01801.mp3', // Skaian Skirmish
		'assets://storyfiles/hs2/01931/01931.mp3': './music/01931/01931.mp3', // How Do I Live (Bunny Back in the Box Version)
		'assets://storyfiles/hs2/11931/11931.mp3': './music/11931/11931.mp3', // How Do I Live (Bunny Back in the Box Version)
		'assets://storyfiles/hs2/01940/01940.mp3': './music/01940/01940.mp3', // Descend
		// ACT 5
		'assets://storyfiles/hs2/13294/13294.mp3': './music/13294/13294.mp3', // Megalovania
        'assets://storyfiles/hs2/03294/03294.mp3': './music/03294/03294.mp3', // Megalovania
		
		
    },

    trees: {
        './album-art/music/cool-and-new-homestuck/': 'assets://archive/music/cool-and-new-homestuck/'
    },

    edit(archive) {
        archive.music.flashes["005197"].tracks = [
            "mayorlovania"
        ],
        archive.music.tracks["mayorlovania"] = {
            "name": "Mayorlovania",
            "artists": [
                {
                    "who": "noisemaker",
                    "what": null,
                }
            ],
            "album": [
                "cool-and-new-homestuck"
            ],
            "commentary": null,
            "contributors": [],
            "coverArtists": null,
            "duration": 160,
            "lyrics": null,
            "references": [
                "megalovania",
                "mayor-maynot"
            ],
            "referencedBy": [],
            "date": null,
            "directory": "mayorlovania",
            "bandcampId": null,
            "urls": [
                "https://www.youtube.com/watch?v=RifPGqC5Ulc"
            ],
            "group": "",
            "pages": [
                "005197"
            ]
        },
        archive.music.artists["bobthetacocat"] = {
            "directory": "bobthetacocat",
            "name": "BobTheTacocat",
            "urls": [
                "https://twitter.com/bobthetacocat"
            ],
            "credits": [
                {
                    "directory": "cool-and-new-homestuck",
                    "coverArt": {
                        "album": "cool-and-new-homestuck",
                        "what": null,
                    },
                    "music": [],
                    "art": [],
                }
            ]
        },
        archive.music.artists["hadron"] = {
            "directory": "hadron",
            "name": "Hadron",
            "urls": [
                "https://hadronus.com/"
            ],
            "credits": [
                {
                    "directory": "cool-and-new-homestuck",
                    "coverArt": {
                        "album": "cool-and-new-homestuck",
                        "what": null,
                    },
                    "music": [],
                    "art": [],
                }
            ]
        },
        archive.music.artists["noisemaker"] = {
            "directory": "noisemaker",
            "name": "Noisemaker",
            "urls": [
                "https://noisemaster.bandcamp.com/"
            ],
            "credits": [
                {
                    "directory": "cool-and-new-homestuck",
                    "coverArt": null,
                    "music": [
                        {
                            "track": "mayorlovania",
                            "what": null,
                        }
                    ],
                    "art": [],
                }
            ]
        },
        archive.music.albums["cool-and-new-homestuck"] = {
            "name": "Cool and New Homestuck",
            "artists": null,
            "albumCoverArtists": [
              {
                "who": "bobthetacocat",
                "what": null
              },
              {
                "who": "hadron",
                "what": null
              }
            ],
            "commentary": null,
            "directory": "cool-and-new-homestuck",
            "tracks": [
              "mayorlovania"
            ],
            "hasTrackArt": false,
            "date": "2016-09-03T01:00:00.000Z",
            "urls": [
              "https://coolandnewwebcomic.bandcamp.com/album/cool-and-new-homestuck",
              "https://www.youtube.com/playlist?list=PLMXVVm-BDvr9G2C_sk0OSKpZuxGzsIAh-",
            ],
            "bonus": [],
            "usesGroups": false
          }
    }
}