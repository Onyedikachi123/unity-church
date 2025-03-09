import { defineDb, defineTable, column, NOW } from 'astro:db';

const Bulletin = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    coverImageUrl: column.text({
      optional: true,
      default: "https://picsum.photos/id/24/560/315?blur=2",
    }),
    sermonDate: column.date({
      optional: true,
      default: NOW,
    }),
    slug: column.text({
      optional: true,
      default: NOW,
    }),
    serviceType: column.text({
      default: "Sunday Service",
    }),
    sermonPreacher: column.text({
      default: "Pastor John Doe",
    }),
    bibleReadingVerse: column.text({
      default: "John 3:16",
    }),
    bibleReadingText: column.text({
      default: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    }),
    bibleVersion: column.text({
      default: "NIV",
    }),
    firstHymnTitle: column.text({
      default: "Amazing Grace",
    }),
    firstHymnLyrics: column.text({
      default: `
      1. Amazing grace! how sweet the sound,<br>
       That saved a wretch; like me!<br>
      once was lost, but now am found,<br>
      Was blind, but now I see.<br>
   
   2 ’Twas grace that taught my heart to fear,<br>
     And grace my fears relieved;<br>
     How precious did that grace appear<br>
     The hour I first believed!<br>
   
   3 The Lord hath promised good to me,<br>
     His word my hope secures;<br>
     He will my shield and portion be<br>
     As long as life endures.<br>
   
   4 When we’ve been there ten thousand years,<br>
     Bright shining as the sun,<br>
     We’ve no less days to sing God’s praise<br>
     Than when we first begun.`,
    }),
    secondHymnTitle: column.text({
      default: "Glory to God on high !",
    }),
    secondHymnLyrics: column.text({
      default: `
      1 Let heaven and earth reply,<br>
      Praise ye His name !<br>
      His love and grace adore,<br>
      Who all our sorrows bore ;<br>
      Sing loud for evermore,<br>
      Worthy the Lamb !<br>
    
      2 While they around the throne<br>
      Cheerfully join in one,<br>
      Praising His name,<br>
      Ye who have felt His blood<br>
      Sealing your peace with God,<br>
      Sound His dear name abroad !<br>
      Worthy the Lamb !<br>
    
      3 Join, all ye ransomed race,<br>
      Our Lord and God to bless;<br>
      Praise ye His name !<br>
      In Him we will rejoice,<br>
      And make a joyful noise,<br>
      Shouting with heart and voice,<br>
      Worthy the Lamb !<br>
    
      4 What though we change our place,<br>
      Yet we shall never cease<br>
      Praising His name ;<br>
      Creation, Providence, Redemption<br>
      To Him our songs we bring,<br>
      Hail Him our gracious King,<br>
      And without ceasing sing,<br>
      Worthy the Lamb !<br>
      `,
    }),
    thirdHymnTitle: column.text({
      default: "Oh, worship the King",
    }),
    thirdHymnLyrics: column.text({
      default: `
      1 Oh, worship the King,<br>
      All glorious above !<br>
      Oh, gratefully sing<br>
      His power and His love;<br>
      Our Shield and Defender,<br>
      The Ancient of Days,<br>
      Pavilioned in splendour,<br>
      And girded with praise.<br>
    
      2 Oh, tell of His might,<br>
      Oh, sing of His grace !<br>
      Whose robe is the light,<br>
      Whose canopy space ;<br>
      His chariots of wrath<br>
      The deep thunder-clouds form,<br>
      And dark is His path<br>
      On the wings of the storm.<br>
    
      3 The earth with its store<br>
      Of wonders untold,<br>
      Almighty ! Thy power<br>
      Hath founded of old :<br>
      Hath 'stablished it fast<br>
      By a changeless decree ;<br>
      And round it hath cast,<br>
      Like a mantle, the sea.<br>
    
      4 Thy bountiful care,<br>
      What tongue can recite ?<br>
      It breathes in the air,<br>
      It shines in the light ;<br>
      It streams from the hills,<br>
      It descends to the plain,<br>
      And sweetly distils in<br>
      The dew and the rain.<br>
    
      5 Frail children of dust,<br>
      And feeble as frail<br>
      In Thee do we trust,<br>
      Nor find Thee to fail :<br>
      Thy mercies how tender,<br>
      How firm to the end !<br>
      Our Maker, Defender,<br>
      Redeemer, and Friend !<br>
    
      6 O measureless Might !<br>
      Ineffable Love !<br>
      While angels delight<br>
      To hymn Thee above,<br>
      The humbler creation,<br>
      Though feeble their lays,<br>
      With true adoration<br>
      Shall sing to Thy praise.<br>
      `,
    }),
    fourthHymnTitle: column.text({
      default: "Praise, my soul, the King of heaven",
    }),
    fourthHymnLyrics: column.text({
      default: `
      1 Praise, my soul, the King of heaven ;<br>
      To His feet thy tribute bring ;<br>
      Ransomed, healed, restored, forgiven,<br>
      Who like thee His praise shall sing ?<br>
      Praise Him! praise Him!<br>
      Praise the everlasting King!<br>
    
      2 Praise Him for His grace and favour<br>
      To our fathers in distress ;<br>
      Praise Him, still the same as ever,<br>
      Slow to chide, and swift to bless :<br>
      Praise Him! praise Him !<br>
      Glorious in His faithfulness !<br>
    
      3 Father-like He tends and spares us,<br>
      Well our feeble frame He knows ;<br>
      In His hands He gently bears us,<br>
      Rescues us from all our foes :<br>
      Praise Him ! praise Him !<br>
      Widely as His mercy flows.<br>
    
      4 Angels, help us to adore Him,<br>
      Ye behold Him face to face !<br>
      Sun and moon, bow down before<br>
      Him! Dwellers all in time and space,<br>
      Praise Him! praise Him !<br>
      Praise with us the God of grace !<br>
      `,
    }),
    fifthHymnTitle: column.text({
      default: "A mighty fortress is our God",
    }),
    fifthHymnLyrics: column.text({
      default: `
      1 A mighty fortress is our God,<br>
      A bulwark never failing :<br>
      Our Helper He, amid the flood<br>
      Of mortal ills prevailing.<br>
      For still our ancient foe<br>
      Doth seek to work his woe ;<br>
      His craft and power are great,<br>
      And armed with cruel hate<br>
      On earth is not his equal.<br>
    
      2 Did we in our own strength confide,<br>
      Our striving would be losing,<br>
      Were not the right Man on our side,<br>
      The Man of God's own choosing.<br>
      Dost ask who that may be ?<br>
      Christ Jesus, it is He !<br>
      Lord Sabaoth is His name,<br>
      From age to age the same :<br>
      And He must win the battle.<br>
    
      3 And though this world, with devils<br>
      filled,<br>
      Should threaten to undo us:<br>
      We will not fear; for God hath willed<br>
      His truth to triumph through us.<br>
      Let goods and kindred go,<br>
      This mortal life also ;<br>
      The body they may kill :<br>
      God's truth abideth still,<br>
      His Kingdom is for ever.<br>
      `,
    }),
    sixthHymnTitle: column.text({
      default: "A safe stronghold our God is still",
    }),
    sixthHymnLyrics: column.text({
      default: `
      1 A safe stronghold our God is still,<br>
      A trusty shield and weapon ;<br>
      He'll help us clear from all the ill<br>
      That hath us now o'er taken.<br>
      The ancient prince of hell<br>
      Hath risen with purpose fell ;<br>
      Strong mail of craft and power<br>
      He weareth in this hour,<br>
      On earth is not his fellow.<br>
    
      2 With force of arms we nothing can,<br>
      Full soon were we down-ridden ;<br>
      But for us fights the proper Man,<br>
      Whom God Himself hath bidden.<br>
      Ask ye, Who is this same ?<br>
      Christ Jesus is His name,<br>
      The Lord Sabaoth's Son ;<br>
      He, and no other one,<br>
      Shall conquer in the battle.<br>
    
      3 And were this world all devils o'er,<br>
      And watching to devour us,<br>
      We lay it not to heart so sore ;<br>
      Not they can overpower us.<br>
      And let the prince of ill<br>
      Look grim as e'er he will,<br>
      He harms us not a whit :<br>
      For why ? His doom is writ ;<br>
      A word shall quickly slay him.<br>
    
      4 God's word, for all their craft and force,<br>
      One moment will not linger,<br>
      But, spite of hell, shall have its course;<br>
      'Tis written by His finger.<br>
      And though they take our life,<br>
      Goods, honour, children, wife,<br>
      Yet is their profit small ;<br>
      These things shall vanish all,<br>
      The city of God remaineth.<br>
      `,
    }),
    seventhHymnTitle: column.text({
      default: "To God be the glory! great things",
    }),
    seventhHymnLyrics: column.text({
      default: `
      1 To God be the glory! great things<br>
      He hath done :<br>
      So loved He the world that He gave us His Son ;<br>
      Who yielded His life an atonement for sin,<br>
      And opened the Life-gate that all may go in.<br>
    
      Praise the Lord ! praise the Lord !<br>
      Let the earth hear His voice !<br>
      Praise the Lord ! praise the Lord !<br>
      Let the people rejoice !<br>
      Oh, come to the Father, through Jesus the Son ;<br>
      And give Him the glory<br>
      great things He hath done!<br>
    
      2 O perfect redemption, the purchase of blood,<br>
      To every believer the promise of God;<br>
      The vilest offender who truly believes,<br>
      That moment from Jesus a pardon receives.<br>
    
      3 Great things He hath taught us, great<br>
      things He hath done,<br>
      And great our rejoicing through Jesus the Son;<br>
      But purer, and higher, and greater will be<br>
      Our wonder, our transport, when Jesus we see.<br>
      `,
    }),
    eighthHymnTitle: column.text({
      default: "Holy, Holy, Holy! Lord God",
    }),
    eighthHymnLyrics: column.text({
      default: `
      1 Holy, Holy, Holy! Lord God Almighty !<br>
      Early in the morning our song shall rise to Thee ;<br>
      Holy, Holy, Holy! Merciful and Mighty !<br>
      God in Three Persons, blessed Trinity !<br>
    
      2 Holy, Holy, Holy! all the saints adore Thee,<br>
      Casting down their golden crowns around the glassy sea ;<br>
      Cherubim and Seraphim falling down before Thee,<br>
      Which wert, and art, and evermore shall be.<br>
    
      3 Holy, Holy, Holy! though the darkness hide Thee,<br>
      Though the eye of sinful man<br>
      Thy glory may not see :<br>
      Only Thou art holy, there is none beside Thee,<br>
      Perfect in power, in love, and purity.<br>
    
      4 Holy, Holy, Holy! Lord God Almighty !<br>
      All Thy works shall praise<br>
      Thy name in earth, and sky, and sea ;<br>
      Holy, Holy, Holy! Merciful and Mighty !<br>
      God in Three Persons, blessed Trinity!<br>
      `,
    }),
    ninethHymnTitle: column.text({
      default: "In grace the holy God",
    }),
    ninethHymnLyrics: column.text({
      default: `
      1 In grace the holy God<br>
      Did full salvation plan,<br>
      Electing in His sovereign grace<br>
      To save rebellious man.<br>
      By grace are ye saved through faith,<br>
      Through faith, . . . through faith, . . .<br>
      Through faith, and that not of yourselves,<br>
      Through faith, and that not of yourselves,<br>
      Not of works, . . . not of works, . . .<br>
      Not of works, lest any man should boast :<br>
      It is the gift of God.<br>
      Not of works, lest any man should boast :<br>
      It is the gift of God.<br>
      It is the gift of God ; it is the gift of God ;<br>
      It is the gift of God the gift of God.<br>
    
      2 This grace of God appears<br>
      In Jesus Christ His Son,<br>
      He, lifted on the cross of shame,<br>
      The grace of God makes known.<br>
    
      3 To all who do believe<br>
      In God, through Christ revealed,<br>
      By grace they full salvation have,<br>
      And sons of God are sealed.<br>
      `,
    }),
    closingHymnTitle: column.text({
      default: `Blessed Assurance`,
    }),
    closingHymnLyrics: column.text({
      default: `
      1 Blessed assurance, Jesus is mine;<br>
        Oh, what a foretaste of glory divine!<br>
        Heir of salvation, purchase of God,<br>
        Born of His Spirit, washed in His blood.<br>
       
        This is my story, this is my song,<br>
        Praising my Savior all the day long.<br>
        This is my story, this is my song,<br>
        Praising my Savior all the day long.<br>
      
      2 Perfect submission, perfect delight,<br>
        Visions of rapture now burst on my sight;<br>
        Angels descending, bring from above<br>
        Echoes of mercy, whispers of love.<br>
      
      3 Perfect submission, all is at rest,<br>
        I in my Savior am happy and blest;<br>
        Watching and waiting, looking above,<br>
        Filled with His goodness, lost in His love.`,
    }),
    announcements: column.text({
      default: `<h4 class="code-line" data-line-start="0" data-line-end="1"><a id="New_to_Unity_Hill_Chapel_0"></a>New to Unity Hill Chapel</h4>
<p>If this is your first-time worshipping with us, we are glad you joined us this morning, we pray that you are blessed as you worship with us.<br>
For more information on the church, please visit our website - <strong><a href="http://www.unityhillchapel.org">www.unityhillchapel.org</a></strong> and leave your contact information there, alternatively, you can call us on <strong>0906 020 0000</strong> or email us at <strong><a href="/cdn-cgi/l/email-protection#c3aaada5ac83b6adaab7baabaaafafa0aba2b3a6afedacb1a4"><span class="__cf_email__" data-cfemail="d7beb9b1b897a2b9bea3aebfbebbbbb4bfb6a7b2bbf9b8a5b0">[email&#160;protected]</span></a></strong>.</p>`
    }),
    birthdays: column.text({
      default: `<ul>
      <li>...</li>
      <li>...</li>
      </ul>`,
    }),
  }
});

const coverpage = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    imageUrl: column.text({
      optional: true,
      default: "https://picsum.photos/id/24/560/315?blur=2",
    }),

  }
});

export default defineDb({
  tables: {
    Bulletin, coverpage
  }
});