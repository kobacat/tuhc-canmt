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
        'assets://storyfiles/hs2/13294/13294.mp3': './music/13294/13294.mp3',
        'assets://storyfiles/hs2/03294/03294.mp3': './music/03294/03294.mp3',
        'assets://storyfiles/hs2/00137/00137.mp3': './music/00137/00137.mp3',
        'assets://storyfiles/hs2/00222/00222.mp3': './music/00222/00222.mp3',
        'assets://storyfiles/hs2/10246/10246.mp3': './music/10246/10246.mp3',
        'assets://storyfiles/hs2/00253/afterthought-showtime_piano.mp3': './music/00253/afterthought-showtime_piano.mp3',
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