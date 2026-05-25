import React, { useState, useRef, useEffect } from 'react';
import { Search, User, Menu, Play, ChevronRight, ChevronLeft, Share2, ChevronDown, Camera, MessageCircle, Video, X } from 'lucide-react';
import './App.css';

function NavigationBar({ activeTab, setActiveTab, setSearchOpen }) {
  return (
    <nav className="sp-nav">
      <div className="sp-nav-left">
        <div className="sp-logo">TLOUtube</div>
      </div>
      <div className="sp-nav-links">
        <button className={activeTab === 'episodes' ? 'active' : ''} onClick={() => setActiveTab('episodes')}>EPISODES</button>
        <button className={activeTab === 'seasons' ? 'active' : ''} onClick={() => setActiveTab('seasons')}>SEASONS</button>
        <button className={activeTab === 'actors' ? 'active' : ''} onClick={() => setActiveTab('actors')}>ACTORS</button>
        <button className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>ABOUT</button>
      </div>
      <div className="sp-nav-right">
        <Search size={20} style={{ cursor: 'pointer', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={e => e.currentTarget.style.color = 'white'} onClick={() => setSearchOpen(true)} />
      </div>
    </nav>
  );
}

function FirstPage({ setActiveTab, setSearchOpen }) {
  const carouselRef = useRef(null);
  const [fpTab, setFpTab] = useState('about');

  const characters = [
    {
      id: 'ellie',
      name: 'ELLIE WILLIAMS',
      role: 'Protagonist',
      bio: 'Now 19, Ellie has found a semblance of peace in Jackson. But when a violent event disrupts her life, she embarks on a relentless journey for justice. Driven by a need for vengeance, she will stop at nothing to hunt down those who wronged her, even if it means losing her humanity in the process.',
      img: '/images/2page/Characters/Ellie_main.jpg',
      port: '/images/2page/Characters/Ellie_portrait.jpg',
      stats: {
        Age: '19',
        Affiliation: 'Jackson',
        Signature: 'Switchblade',
        Status: 'Alive'
      }
    },
    {
      id: 'joel',
      name: 'JOEL MILLER',
      role: 'Survivor',
      bio: 'Joel has settled down in Jackson after the traumatic events at the Firefly hospital. His relationship with Ellie has become strained over the years. Despite finding peace in this new community, his past actions continue to haunt him and shape the world around him.',
      img: '/images/2page/Characters/Joel_main.jpg',
      port: '/images/2page/Characters/Joel_portrait.jpg',
      stats: {
        Age: 'Mid 50s',
        Affiliation: 'Jackson',
        Signature: 'Revolver',
        Status: 'Alive'
      }
    },
    {
      id: 'abby',
      name: 'ABIGAIL ANDERSON',
      role: 'WLF Soldier',
      bio: 'Abby is a hardened soldier of the Washington Liberation Front. Her past is deeply intertwined with Joel and Ellie, leading to a fateful collision. Trained as a killer, she leads a group of friends on a mission that will change everything.',
      img: '/images/2page/Characters/Abi_main.jpg',
      port: '/images/2page/Characters/Abi_portrait.jpg',
      stats: {
        Age: 'Early 20s',
        Affiliation: 'WLF',
        Signature: 'Military Rifle',
        Status: 'Alive'
      }
    }
  ];
  const [activeChar, setActiveChar] = useState(characters[0]);

  const stories = [
    {
      id: 'jackson',
      title: 'PART I',
      name: 'JACKSON',
      text: 'Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. But this fragile peace is soon shattered.',
      img: '/images/2page/story/1.jpg',
      port: '/images/2page/story/1_mini.jpg',
      stats: {
        Location: 'Wyoming',
        Focus: 'Community',
        Threat: 'Low',
        Goal: 'Patrols'
      }
    },
    {
      id: 'seattle',
      title: 'PART II',
      name: 'SEATTLE',
      text: 'When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions. Seattle becomes a brutal warzone where factions collide.',
      img: '/images/2page/story/2.jpg',
      port: '/images/2page/story/2_mini.jpg',
      stats: {
        Location: 'Washington',
        Focus: 'Vengeance',
        Threat: 'Extreme',
        Goal: 'Hunt'
      }
    },
    {
      id: 'santa-barbara',
      title: 'PART III',
      name: 'SANTA BARBARA',
      text: 'Months later, unable to let go of her trauma, Ellie travels to California in search of a rumored Firefly base and her final target. In the sun-drenched ruins of Santa Barbara, she must face a new sadistic faction and ultimately decide how far she is willing to go to end the cycle of violence.',
      img: '/images/2page/story/3.jpg',
      port: '/images/2page/story/3_mini.jpg',
      stats: {
        Location: 'California',
        Focus: 'Resolution',
        Threat: 'High',
        Goal: 'Closure'
      }
    }
  ];
  const [activeStory, setActiveStory] = useState(stories[0]);

  const galleryImages = [
    '/images/1page/episode1.png',
    '/images/2page/story/1.jpg',
    '/images/2page/Characters/Ellie_main.jpg',
    '/images/1page/about/bg.jpg',
    '/images/2page/story/2.jpg',
    '/images/2page/Characters/Joel_main.jpg',
    '/images/2page/story/3.jpg',
  ];
  const [galleryIndex, setGalleryIndex] = useState(3);


  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToTop = (tabName) => {
    setActiveTab(tabName);
    const topElem = document.querySelector('.page-container.second-page');
    if (topElem) {
      topElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="page-container first-page">
      <div className="fp-left">
        <video
          src="/images/2page/vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg"
          style={{ opacity: fpTab === 'about' ? 1 : 0, transition: 'opacity 1.2s ease-in-out', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
        />
        {characters.map(char => (
          <img loading="lazy"
            key={`bg-char-${char.id}`}
            src={char.img}
            className="hero-bg"
            style={{ 
              objectFit: 'cover', width: '100%', height: '100%', filter: 'brightness(0.6)',
              opacity: fpTab === 'characters' && activeChar.id === char.id ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              position: 'absolute', top: 0, left: 0, zIndex: 0
            }}
            alt="Background"
          />
        ))}
        {stories.map(story => (
          <img loading="lazy"
            key={`bg-story-${story.id}`}
            src={story.img}
            className="hero-bg"
            style={{ 
              objectFit: 'cover', width: '100%', height: '100%', filter: 'brightness(0.6)',
              opacity: fpTab === 'story' && activeStory.id === story.id ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              position: 'absolute', top: 0, left: 0, zIndex: 0
            }}
            alt="Background"
          />
        ))}

        <nav className="fp-nav">
          <ul className="fp-nav-links">
            <li className={fpTab === 'about' ? 'active' : ''}><a href="#" onClick={(e) => { e.preventDefault(); setFpTab('about'); }}>ABOUT THE SERIAL</a></li>
            <li className={fpTab === 'characters' ? 'active' : ''}><a href="#" onClick={(e) => { e.preventDefault(); setFpTab('characters'); }}>CHARACTERS</a></li>
            <li className={fpTab === 'story' ? 'active' : ''}><a href="#" onClick={(e) => { e.preventDefault(); setFpTab('story'); }}>STORY</a></li>
            <li className={fpTab === 'gallery' ? 'active' : ''}><a href="#" onClick={(e) => { e.preventDefault(); setFpTab('gallery'); }}>GALLERY</a></li>
          </ul>
          <div className="fp-nav-icons">
            <Search size={20} style={{ cursor: 'pointer', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={e => e.currentTarget.style.color = 'white'} onClick={() => setSearchOpen(true)} />
          </div>
        </nav>

        <div style={{ opacity: fpTab === 'about' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: fpTab === 'about' ? 'auto' : 'none' }}>
          <div className="fp-title-overlay">
            <span>THE</span>
            <span>LAST</span>
            <span>OF US</span>
          </div>
          <div className="fp-episodes-carousel">
            <div className="fp-carousel-header">
              <h3>All episodes</h3>
              <div className="fp-carousel-arrows">
                <button className="fp-arrow-btn" onClick={() => scroll('left')}><ChevronLeft size={20} color="white" /></button>
                <button className="fp-arrow-btn" onClick={() => scroll('right')}><ChevronRight size={20} color="white" /></button>
              </div>
            </div>
            <div className="fp-carousel-cards" ref={carouselRef}>
              {[
                { id: 1, title: 'ELLIE', ext: 'png' },
                { id: 2, title: 'JOEL', ext: 'jpg' },
                { id: 3, title: 'ROAD TRIP', ext: 'png' },
                { id: 4, title: 'SEATTLE', ext: 'png' },
                { id: 5, title: 'THE PARK', ext: 'png' },
                { id: 6, title: 'HILLCREST', ext: 'png' },
                { id: 7, title: 'STRINGS', ext: 'png' },
                { id: 8, title: 'FLOODED CITY', ext: 'png' },
              ].map((ep) => (
                <div className="fp-card" key={ep.id}>
                  <img loading="lazy" src={`/images/1page/episode${ep.id}.${ep.ext}`} alt={`Episode ${ep.id}`} />
                  <span className="fp-card-number">{String(ep.id).padStart(2, '0')}</span>
                  <div className="fp-card-info">
                    CHAPTER 0{ep.id}.<br />{ep.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ opacity: fpTab === 'characters' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: fpTab === 'characters' ? 'auto' : 'none' }}>
          <div className="fp-episodes-carousel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '220px', marginBottom: '20px' }}>
              {characters.map(char => (
                <div key={char.id} className="fp-title-overlay" style={{ position: 'absolute', top: 0, left: 0, bottom: 'auto', right: 'auto', flexDirection: 'column', alignItems: 'flex-start', opacity: activeChar.id === char.id ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: activeChar.id === char.id ? 'auto' : 'none' }}>
                  <span style={{ fontSize: '1.2rem', letterSpacing: '3px', color: 'var(--accent-color)', marginBottom: '5px' }}>
                    {char.role.toUpperCase()}
                  </span>
                  <span style={{ fontSize: '7rem', lineHeight: '1' }}>{char.name.split(' ')[0]}</span>
                  <span style={{ fontSize: '7rem', lineHeight: '1' }}>{char.name.split(' ')[1] || ''}</span>
                </div>
              ))}
            </div>

            <div className="fp-carousel-header">
              <h3 className="oswald-font" style={{ letterSpacing: '2px' }}>SELECT CHARACTER</h3>
            </div>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
              {characters.map(char => (
                <div
                  key={char.id}
                  onClick={() => setActiveChar(char)}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: activeChar.id === char.id ? '2px solid var(--accent-color)' : '2px solid transparent',
                    opacity: activeChar.id === char.id ? 1 : 0.5,
                    transition: 'all 0.3s'
                  }}
                >
                  <img loading="lazy" src={char.port} alt={char.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ opacity: fpTab === 'story' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: fpTab === 'story' ? 'auto' : 'none' }}>
          <div className="fp-episodes-carousel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '150px', marginBottom: '20px' }}>
              {stories.map(story => (
                <div key={story.id} className="fp-title-overlay" style={{ position: 'absolute', top: 0, left: 0, bottom: 'auto', right: 'auto', flexDirection: 'column', alignItems: 'flex-start', opacity: activeStory.id === story.id ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: activeStory.id === story.id ? 'auto' : 'none' }}>
                  <span style={{ fontSize: '1.2rem', letterSpacing: '3px', color: 'var(--accent-color)', marginBottom: '5px' }}>
                    {story.title}
                  </span>
                  <span style={{ fontSize: '6rem', lineHeight: '1' }}>{story.name}</span>
                </div>
              ))}
            </div>

            <div className="fp-carousel-header">
              <h3 className="oswald-font" style={{ letterSpacing: '2px' }}>SELECT CHAPTER</h3>
            </div>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
              {stories.map(story => (
                <div
                  key={story.id}
                  onClick={() => setActiveStory(story)}
                  style={{
                    width: '120px',
                    height: '80px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: activeStory.id === story.id ? '2px solid var(--accent-color)' : '2px solid transparent',
                    opacity: activeStory.id === story.id ? 1 : 0.5,
                    transition: 'all 0.3s'
                  }}
                >
                  <img loading="lazy" src={story.port} alt={story.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ opacity: fpTab === 'gallery' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: fpTab === 'gallery' ? 'auto' : 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {galleryImages.map((img, index) => (
             <img loading="lazy" key={`bg-gal-${index}`} src={img} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: galleryIndex === index ? 1 : 0, filter: 'blur(20px) brightness(0.3)', transition: 'all 1s ease', pointerEvents: 'none' }} />
          ))}
          <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1200px' }}>
            {galleryImages.map((img, index) => {
              let offset = index - galleryIndex;
              const n = galleryImages.length;
              if (offset > Math.floor(n / 2)) offset -= n;
              else if (offset < -Math.floor(n / 2)) offset += n;
              
              const absOffset = Math.abs(offset);
              const z = -absOffset * 150;
              const x = offset * 250;
              const scale = 1 - absOffset * 0.15;
              const rotateY = offset === 0 ? 0 : (offset > 0 ? -45 : 45);
              return (
                <div
                  key={index}
                  onClick={() => setGalleryIndex(index)}
                  style={{
                    position: 'absolute',
                    width: '300px',
                    height: '400px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    boxShadow: offset === 0 ? '0 20px 50px rgba(0,0,0,0.8), 0 0 20px rgba(235, 172, 38, 0.5)' : '0 10px 30px rgba(0,0,0,0.5)',
                    zIndex: 100 - absOffset,
                    cursor: 'pointer',
                    opacity: absOffset > 2 ? 0 : 1
                  }}
                >
                  <img loading="lazy" src={img} alt={`Gallery ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fp-right">
        <div className="fp-right-header">
          <h1 className="fp-right-title oswald-font">THE LAST OF US <span>II</span></h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', width: '100%' }}>
          <div style={{ gridColumn: 1, gridRow: 1, opacity: fpTab === 'about' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: fpTab === 'about' ? 'auto' : 'none', zIndex: fpTab === 'about' ? 10 : 0 }}>
            <div className="fp-section">
              <p>
                When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions.
              </p>
            </div>

            <div className="fp-section">
              <h2 className="oswald-font">A GROUND-BREAKING EXPERIENCE</h2>
              <p>
                Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors.
              </p>
            </div>

            <div className="fp-part1-grid">
              <div className="fp-part1-label oswald-font">MAIN CHARACTERS</div>
              <div className="fp-part-card">
                <img loading="lazy" src="/images/2page/Ellie.jpg" alt="Ellie" />
                <div className="fp-play-btn">ELLIE</div>
              </div>
              <div className="fp-part-card">
                <img loading="lazy" src="/images/2page/Joel.jpg" alt="Joel" />
                <div className="fp-play-btn">JOEL</div>
              </div>
            </div>

            <div className="fp-section" style={{ marginTop: '40px' }}>
              <h2 className="oswald-font">A COMPLEX AND EMOTIONAL STORY</h2>
            </div>
          </div>

          <div style={{ gridColumn: 1, gridRow: 1, opacity: fpTab === 'characters' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: fpTab === 'characters' ? 'auto' : 'none', zIndex: fpTab === 'characters' ? 10 : 0 }}>
            <div style={{ position: 'relative', width: '100%', height: '600px' }}>
              {characters.map(char => (
                <div className="fp-characters-tab" key={char.id} style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', gap: '30px', alignItems: 'flex-start', flexDirection: 'column', opacity: activeChar.id === char.id ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: activeChar.id === char.id ? 'auto' : 'none' }}>
                  <div className="fp-tab-content" style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ width: '180px', height: '250px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                      <img loading="lazy" src={char.port} alt={char.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ paddingTop: '10px' }}>
                      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }} className="oswald-font">
                        BIOGRAPHY
                      </div>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        {char.bio}
                      </p>
                    </div>
                  </div>

                  <div style={{ width: '100%', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
                    <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '1px' }} className="oswald-font">
                      CHARACTER DATA
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      {Object.entries(char.stats).map(([key, value]) => (
                        <div key={key} style={{ background: 'rgba(255,255,255,0.03)', padding: '15px 20px', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)' }}>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{key}</div>
                          <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600' }}>{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ gridColumn: 1, gridRow: 1, opacity: fpTab === 'story' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: fpTab === 'story' ? 'auto' : 'none', zIndex: fpTab === 'story' ? 10 : 0 }}>
            <div style={{ position: 'relative', width: '100%', height: '600px' }}>
              {stories.map(story => (
                <div className="fp-characters-tab" key={story.id} style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', gap: '30px', alignItems: 'flex-start', flexDirection: 'column', opacity: activeStory.id === story.id ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: activeStory.id === story.id ? 'auto' : 'none' }}>
                  <div className="fp-tab-content" style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ width: '180px', height: '250px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                      <img loading="lazy" src={story.port} alt={story.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ paddingTop: '10px' }}>
                      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }} className="oswald-font">
                        STORY OVERVIEW
                      </div>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        {story.text}
                      </p>
                    </div>
                  </div>

                  <div style={{ width: '100%', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
                    <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '1px' }} className="oswald-font">
                      CHAPTER DATA
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      {Object.entries(story.stats).map(([key, value]) => (
                        <div key={key} style={{ background: 'rgba(255,255,255,0.03)', padding: '15px 20px', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)' }}>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{key}</div>
                          <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600' }}>{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ gridColumn: 1, gridRow: 1, opacity: fpTab === 'gallery' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: fpTab === 'gallery' ? 'auto' : 'none', zIndex: fpTab === 'gallery' ? 10 : 0 }}>
            <div style={{ width: '100%', paddingTop: '10px' }}>
              <div className="fp-section">
                <h2 className="oswald-font" style={{ letterSpacing: '2px', fontSize: '2rem' }}>CONCEPT ART & STILLS</h2>
                <p style={{ marginTop: '20px', fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>Explore the breathtaking visual development and captured moments from the post-pandemic world. Every frame tells a story of survival, loss, and the beauty of nature reclaiming civilization.</p>
              </div>
              
              <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                <div onClick={() => setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length)} style={{ width: '100px', height: '80px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <ChevronLeft size={40} color="var(--accent-color)" />
                </div>
                <div onClick={() => setGalleryIndex((galleryIndex + 1) % galleryImages.length)} style={{ width: '100px', height: '80px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <ChevronRight size={40} color="var(--accent-color)" />
                </div>
              </div>

              <div style={{ width: '100%', marginTop: '50px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
                <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '1px' }} className="oswald-font">
                  ARTWORK DATA
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px 20px', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>STUDIO</div>
                    <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600' }}>Naughty Dog</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px 20px', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>ART DIRECTOR</div>
                    <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600' }}>John Sweeney</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
    if (!isOpen) {
      setQuery('');
      setResults(null);
      setIsSearching(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query) {
      setIsSearching(true);
      setResults(null);
      const timer = setTimeout(() => {
        setIsSearching(false);
        const q = query.toUpperCase();
        if (q === 'ELLIE') {
           setResults([
             { type: 'SUBJECT FILE', title: 'ELLIE WILLIAMS', desc: 'Immune. Currently residing in Jackson. Status: Active.' },
             { type: 'INCIDENT REPORT', title: 'FIREFLY HOSPITAL', desc: 'Subject extracted from SLC facility. Heavy casualties.' }
           ]);
        } else if (q === 'JOEL') {
           setResults([
             { type: 'PERSONNEL FILE', title: 'JOEL MILLER', desc: 'Former smuggler. Residing in Jackson. Status: Active.' },
             { type: 'CONTRABAND LOG', title: 'WEAPONS CACHE', desc: 'Multiple firearms registered to J. Miller.' }
           ]);
        } else if (q === 'WLF' || q === 'WASHINGTON LIBERATION FRONT') {
           setResults([
             { type: 'FACTION DATABANK', title: 'WASHINGTON LIBERATION FRONT', desc: 'Paramilitary group in control of Seattle quarantine zone.' }
           ]);
        } else if (q === 'SERAPHITES' || q === 'SCARS') {
           setResults([
             { type: 'FACTION DATABANK', title: 'SERAPHITES', desc: 'Religious cult operating in Seattle. Technophobic.' }
           ]);
        } else {
           setResults([
             { type: 'ARCHIVE MATCH', title: `FILE: ${q}`, desc: 'Classified FEDRA document matching your query.' }
           ]);
        }
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
      setResults(null);
    }
  }, [query]);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)',
      zIndex: 99999, opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none',
      transition: 'all 0.5s ease', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center'
    }}>
      <button style={{ position: 'absolute', top: '40px', right: '50px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', transition: 'transform 0.3s' }} onClick={onClose} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2) rotate(90deg)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}>
        <X size={40} />
      </button>

      <div style={{ width: '90%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p className="oswald-font" style={{ fontSize: '1.2rem', letterSpacing: '4px', color: 'var(--accent-color)', marginBottom: '20px' }}>SYSTEM DATABASE</p>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>
          <Search size={32} color="rgba(255,255,255,0.5)" style={{ marginRight: '20px', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="ENTER ACCESS CODE OR QUERY..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              background: 'transparent', border: 'none', color: 'white',
              fontSize: '2rem', fontFamily: 'Oswald, sans-serif', width: '100%',
              outline: 'none', textTransform: 'uppercase'
            }}
          />
        </div>
        
        <div style={{ marginTop: '40px', width: '100%', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', display: 'flex', alignItems: 'center' }}>QUICK SEARCH:</span>
          {['ELLIE', 'JOEL', 'ABBY', 'WLF', 'SERAPHITES', 'JACKSON'].map(tag => (
            <div key={tag} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.8rem', letterSpacing: '2px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s' }} onMouseOver={e => { e.currentTarget.style.background = 'var(--accent-color)'; e.currentTarget.style.color = 'black'; }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'white'; }} onClick={() => { setQuery(tag); }}>
              {tag}
            </div>
          ))}
        </div>
        
        {query && isSearching && (
           <div style={{ marginTop: '60px', width: '100%', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
             <p style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>SEARCHING FEDRA ARCHIVES FOR "{query}"...</p>
             <div style={{ marginTop: '20px', width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--accent-color)', borderRadius: '50%', margin: '20px auto' }} className="spin-animation"></div>
           </div>
        )}

        {query && !isSearching && results && (
           <div style={{ marginTop: '40px', width: '100%', display: 'flex', flexDirection: 'column', gap: '15px', animation: 'fadeIn 0.5s' }}>
             <p style={{ letterSpacing: '2px', fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '10px' }}>{results.length} MATCHES FOUND:</p>
             {results.map((res, i) => (
               <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderLeft: '3px solid var(--accent-color)', padding: '20px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                 <div style={{ fontSize: '0.7rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>{res.type}</div>
                 <div className="oswald-font" style={{ fontSize: '1.5rem', color: 'white', letterSpacing: '1px', marginBottom: '10px' }}>{res.title}</div>
                 <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>{res.desc}</div>
               </div>
             ))}
           </div>
        )}
      </div>
    </div>
  )
}

const episodesData = [
  {
    id: 1,
    title: "THE LAST OF US\nPART II",
    rating: "8.8",
    date: "15 JANUARY 2023",
    desc: "The Last of Us is an American post-apocalyptic drama television series airing on HBO. Based on the 2013 video game The Last of Us, developed by Naughty Dog, it follows the story of smuggler Joel, who escorts a teenage girl, Ellie, across a post-apocalyptic United States.",
    bgImage: "/images/1page/episode1.png",
    trailerImage: "/images/1page/episode1.png"
  },
  {
    id: 2,
    title: "ELLIE'S JOURNEY",
    rating: "9.1",
    date: "22 JANUARY 2023",
    desc: "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace.",
    bgImage: "/images/1page/episode2.jpg",
    trailerImage: "/images/1page/episode2.jpg"
  },
  {
    id: 3,
    title: "JACKSON",
    rating: "8.5",
    date: "29 JANUARY 2023",
    desc: "When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure.",
    bgImage: "/images/1page/episode3.png",
    trailerImage: "/images/1page/episode3.png"
  },
  {
    id: 4,
    title: "SEATTLE DAY 1",
    rating: "9.3",
    date: "5 FEBRUARY 2023",
    desc: "Ellie arrives in Seattle, searching for Abby. The city is overgrown and flooded, controlled by the Washington Liberation Front (WLF).",
    bgImage: "/images/1page/episode4.png",
    trailerImage: "/images/1page/episode4.png"
  },
  {
    id: 5,
    title: "THE SERAPHITES",
    rating: "8.9",
    date: "12 FEBRUARY 2023",
    desc: "Ellie encounters a religious cult known as the Seraphites, who are at war with the WLF for control of Seattle.",
    bgImage: "/images/1page/episode5.png",
    trailerImage: "/images/1page/episode5.png"
  },
  {
    id: 6,
    title: "INFILTRATION",
    rating: "9.5",
    date: "19 FEBRUARY 2023",
    desc: "As the hunt continues, Ellie must navigate treacherous environments and deal with the devastating emotional toll of her quest for revenge.",
    bgImage: "/images/1page/episode6.png",
    trailerImage: "/images/1page/episode6.png"
  },
  {
    id: 7,
    title: "THE DESCENT",
    rating: "9.0",
    date: "26 FEBRUARY 2023",
    desc: "Abby's perspective reveals the other side of the conflict, showing her struggles and relationships within the WLF.",
    bgImage: "/images/1page/episode7.png",
    trailerImage: "/images/1page/episode7.png"
  },
  {
    id: 8,
    title: "EPILOGUE",
    rating: "9.8",
    date: "5 MARCH 2023",
    desc: "The paths of Ellie and Abby converge in a final, brutal confrontation that will leave neither of them unchanged.",
    bgImage: "/images/1page/episode8.png",
    trailerImage: "/images/1page/episode8.png"
  }
];

function SecondPage({ setActiveTab, setTrailerOpen, setSearchOpen }) {
  const [activeId, setActiveId] = useState(1);
  const activeEpisode = episodesData.find(ep => ep.id === activeId);

  return (
    <div className="page-container second-page">
      {episodesData.map(ep => (
        <img loading="lazy" 
          key={`bg-${ep.id}`}
          src={ep.bgImage} 
          alt="Background" 
          className="sp-bg" 
          style={{ 
            opacity: activeEpisode.id === ep.id ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }} 
        />
      ))}
      <div className="sp-overlay" style={{ zIndex: 1 }}></div>

      <NavigationBar activeTab="episodes" setActiveTab={setActiveTab} setSearchOpen={setSearchOpen} />

      <div className="sp-content">
        <div className="sp-episodes-list">
          {episodesData.map(ep => (
            <div
              className={`sp-episode-item ${ep.id === activeId ? 'active' : ''}`}
              key={ep.id}
              onClick={() => setActiveId(ep.id)}
            >
              <div className="sp-episode-dot"></div>
              <span>Episode 0{ep.id}</span>
            </div>
          ))}
        </div>

        <div className="sp-main-info" key={`info-${activeEpisode.id}`} style={{ zIndex: 10, animation: 'fadeIn 0.6s ease-in-out' }}>
          <div className="sp-rating">
            <span className="sp-rating-stars" style={{ color: 'var(--accent-color)' }}>★★★★☆</span>
            <span className="oswald-font">{activeEpisode.rating}</span>
          </div>
          <h1 className="sp-title oswald-font" style={{ whiteSpace: 'pre-line' }}>{activeEpisode.title}</h1>
          <div className="sp-meta">
            <span>{activeEpisode.date}</span>
            <span>|</span>
            <span>Horror</span>
            <span>Action</span>
            <span>Drama</span>
            <span>Thriller</span>
          </div>
          <p className="sp-desc">
            {activeEpisode.desc}
          </p>
          <button className="sp-learn-more" onClick={() => setActiveTab('about')}>
            LEARN MORE <ChevronRight size={16} color="var(--accent-color)" />
          </button>
        </div>

        <div className="sp-trailer-wrapper" style={{ zIndex: 10 }}>
          <div className="sp-trailer-text">Watch full</div>
          <div className="sp-trailer-box" style={{ position: 'relative' }} onClick={() => setTrailerOpen(true)}>
            {episodesData.map(ep => (
              <img loading="lazy" 
                key={`trailer-${ep.id}`}
                src={ep.trailerImage} 
                alt="Trailer Thumbnail"
                style={{
                  opacity: activeEpisode.id === ep.id ? 1 : 0,
                  transition: 'opacity 1s ease-in-out',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            ))}
            <div className="sp-trailer-overlay">
              <div className="sp-trailer-play">
                <Play size={20} fill="white" />
              </div>
            </div>
          </div>
        </div>

        <div className="sp-socials">
          <a href="#instagram"><Camera size={20} /></a>
          <a href="#twitter"><MessageCircle size={20} /></a>
          <a href="#youtube"><Video size={20} /></a>
          <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.2)', margin: '0 5px' }}></div>
          <a href="#share"><Share2 size={20} /></a>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Scroll Down</span>
        <ChevronDown size={24} className="bounce-animation" />
      </div>
    </div>
  );
}

function SeasonsPage({ setActiveTab, setSearchOpen }) {
  const seasons = [
    {
      id: 1,
      title: 'SEASON 1',
      subtitle: 'THE INFECTION BEGINS',
      status: 'AVAILABLE NOW',
      episodes: 9,
      year: '2023',
      img: '/images/1page/episode1.png',
      desc: 'Twenty years after modern civilization has been destroyed, Joel is hired to smuggle Ellie out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey.'
    },
    {
      id: 2,
      title: 'SEASON 2',
      subtitle: 'THE CONSEQUENCES',
      status: 'IN PRODUCTION',
      episodes: 'TBA',
      year: '2025',
      img: '/images/1page/episode4.png',
      desc: 'Following the peaceful settlement in Jackson, a violent event disrupts the tranquility, sending Ellie on a relentless journey of vengeance.'
    }
  ];

  const [activeSeason, setActiveSeason] = useState(seasons[0]);

  return (
    <div className="page-container second-page">
      {seasons.map(season => (
        <img loading="lazy" 
          key={`bg-${season.id}`}
          src={season.img} 
          alt="Background" 
          className="sp-bg" 
          style={{ 
            opacity: activeSeason.id === season.id ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out', 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.25)',
            zIndex: 0
          }} 
        />
      ))}
      <div className="sp-overlay" style={{ zIndex: 1 }}></div>

      <NavigationBar activeTab="seasons" setActiveTab={setActiveTab} setSearchOpen={setSearchOpen} />

      <div className="sp-content" style={{ padding: '0 50px', height: 'calc(100vh - 120px)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', zIndex: 10, position: 'relative' }}>
        {seasons.map(season => {
          const isActive = activeSeason.id === season.id;
          return (
            <div 
              key={season.id}
              onClick={() => setActiveSeason(season)}
              style={{
                flex: isActive ? '1.5' : '1',
                height: '65vh',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.8s cubic-bezier(0.25, 1, 0.25, 1)',
                cursor: 'pointer',
                border: isActive ? '2px solid var(--accent-color)' : '2px solid rgba(255,255,255,0.1)',
                boxShadow: isActive ? '0 10px 40px rgba(0,0,0,0.8)' : '0 10px 20px rgba(0,0,0,0.5)'
              }}
            >
              <img loading="lazy" 
                src={season.img} 
                alt={season.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  filter: isActive ? 'brightness(0.8)' : 'brightness(0.3)', 
                  transition: 'all 0.8s',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)'
                }} 
              />
              
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px', background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)' }}>
                <div style={{ width: '600px', maxWidth: '90vw' }}>
                  <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '10px', fontWeight: 'bold' }}>
                    {season.status}
                  </div>
                  <h2 className="oswald-font" style={{ fontSize: '4.5rem', color: 'white', lineHeight: '1', marginBottom: '5px', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
                    {season.title}
                  </h2>
                  <h3 className="oswald-font" style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>
                    {season.subtitle}
                  </h3>
                  
                  <div style={{ 
                    display: 'grid',
                    gridTemplateRows: isActive ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.8s cubic-bezier(0.25, 1, 0.25, 1), opacity 0.8s ease',
                    opacity: isActive ? 1 : 0,
                  }}>
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{ 
                        transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.25, 1)',
                        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                        paddingBottom: '10px'
                      }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px', maxWidth: '90%' }}>
                          {season.desc}
                        </p>
                        <div style={{ display: 'flex', gap: '40px', fontSize: '1rem', color: 'white', fontWeight: 'bold' }}>
                          <div>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 'normal', display: 'block', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '5px' }}>RELEASE</span>
                            {season.year}
                          </div>
                          <div>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 'normal', display: 'block', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '5px' }}>EPISODES</span>
                            {season.episodes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Scroll Down</span>
        <ChevronDown size={24} className="bounce-animation" />
      </div>
    </div>
  );
}

function ActorsPage({ setActiveTab, setSearchOpen }) {
  const actors = [
    {
      id: 'pedro',
      name: 'PEDRO PASCAL',
      role: 'JOEL MILLER',
      bio: 'José Pedro Balmaceda Pascal is a Chilean-American actor. After nearly two decades of taking small roles in film and television, Pascal rose to prominence for portraying Oberyn Martell in the fourth season of the HBO fantasy series Game of Thrones.',
      img: '/images/1page/actors/Pedro_portrait.jpg',
      bg: '/images/1page/actors/bg1.png'
    },
    {
      id: 'bella',
      name: 'BELLA RAMSEY',
      role: 'ELLIE WILLIAMS',
      bio: 'Isabella May Ramsey is an English actor. They are known for their breakout role as young noblewoman Lyanna Mormont in the HBO fantasy television series Game of Thrones.',
      img: '/images/1page/actors/ellie_portrait.jpg',
      bg: '/images/1page/actors/bg2.png'
    },
    {
      id: 'gabriel',
      name: 'GABRIEL LUNA',
      role: 'TOMMY MILLER',
      bio: 'Gabriel Isaac Luna is an American actor and producer. He is known for his roles as Robbie Reyes / Ghost Rider on the ABC action superhero series Marvel\'s Agents of S.H.I.E.L.D.',
      img: '/images/1page/actors/gabriel_portait.jpeg',
      bg: '/images/1page/actors/bg3.png'
    },
    {
      id: 'anna',
      name: 'ANNA TORV',
      role: 'TESS SERVOPOULOS',
      bio: 'Anna Torv is an Australian actress. She is best known for her role as FBI agent Olivia Dunham on the Fox science fiction series Fringe, for which she received four Saturn Awards.',
      img: '/images/1page/actors/anna_portrait.png',
      bg: '/images/1page/actors/bg4.png'
    }
  ];

  const [activeActor, setActiveActor] = useState(actors[0]);

  return (
    <div className="page-container second-page">
      {actors.map(actor => (
        <img loading="lazy" 
          key={`bg-${actor.id}`}
          src={actor.bg} 
          alt="Background" 
          className="sp-bg" 
          style={{ 
            opacity: activeActor.id === actor.id ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out', 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.25)',
            zIndex: 0
          }} 
        />
      ))}
      <div className="sp-overlay" style={{ zIndex: 1 }}></div>

      <NavigationBar activeTab="actors" setActiveTab={setActiveTab} setSearchOpen={setSearchOpen} />

      <div className="sp-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 120px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center', zIndex: 10, width: '100%', padding: '0 50px' }}>
          {/* Left side: Bio */}
          <div style={{ flex: 1, paddingRight: '40px', zIndex: 10, position: 'relative', height: '450px' }}>
            {actors.map(actor => (
              <div 
                key={`text-${actor.id}`} 
                style={{ 
                  position: 'absolute', 
                  top: '40px', 
                  left: 0, 
                  opacity: activeActor.id === actor.id ? 1 : 0, 
                  transition: 'all 0.8s ease-in-out', 
                  pointerEvents: activeActor.id === actor.id ? 'auto' : 'none',
                  transform: activeActor.id === actor.id ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div style={{ color: 'var(--accent-color)', fontSize: '1.2rem', letterSpacing: '4px', marginBottom: '10px', fontWeight: 'bold' }}>THE CAST</div>
                <h1 className="oswald-font" style={{ fontSize: '5rem', color: 'white', lineHeight: '1.1', marginBottom: '10px' }}>{actor.name}</h1>
                <h2 className="oswald-font" style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}>AS {actor.role}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', borderLeft: '4px solid var(--accent-color)', paddingLeft: '20px' }}>
                  {actor.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Right side: Interactive Selector */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {actors.map(actor => (
              <div 
                key={actor.id} 
                onClick={() => setActiveActor(actor)}
                style={{ 
                  width: activeActor.id === actor.id ? '220px' : '100px', 
                  height: activeActor.id === actor.id ? '320px' : '100px', 
                  borderRadius: activeActor.id === actor.id ? '16px' : '50%', 
                  overflow: 'hidden', 
                  border: activeActor.id === actor.id ? '4px solid var(--accent-color)' : '2px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.8s cubic-bezier(0.25, 1, 0.25, 1)',
                  boxShadow: activeActor.id === actor.id ? '0 15px 40px rgba(0,0,0,0.8)' : 'none',
                  opacity: activeActor.id === actor.id ? 1 : 0.5,
                  filter: activeActor.id === actor.id ? 'grayscale(0%)' : 'grayscale(80%)'
                }}
              >
                <img loading="lazy" src={actor.img} alt={actor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Scroll Down</span>
        <ChevronDown size={24} className="bounce-animation" />
      </div>
    </div>
  );
}

function AboutPage({ setActiveTab, setSearchOpen }) {
  return (
    <div className="page-container second-page">
      <img loading="lazy" src="/images/1page/about/bg.jpg" alt="Background" className="sp-bg" style={{ animation: 'fadeIn 0.5s', filter: 'brightness(0.2)' }} />
      <div className="sp-overlay"></div>

      <NavigationBar activeTab="about" setActiveTab={setActiveTab} setSearchOpen={setSearchOpen} />

      <div className="sp-content" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0 80px', height: 'calc(100vh - 120px)' }}>
        
        {/* Left Side: Text and Info */}
        <div style={{ flex: '1', paddingRight: '60px', zIndex: 10, animation: 'fadeInUp 0.8s ease' }}>
          <div style={{ color: 'var(--accent-color)', fontSize: '1.2rem', letterSpacing: '4px', marginBottom: '10px', fontWeight: 'bold' }}>THE SERIES</div>
          <h1 className="oswald-font" style={{ fontSize: '5rem', color: 'white', lineHeight: '1', marginBottom: '30px', textShadow: '2px 2px 15px rgba(0,0,0,0.8)' }}>
            ABOUT THE SHOW
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '40px', maxWidth: '600px' }}>
            Based on the critically acclaimed video game, The Last of Us takes place 20 years after modern civilization has been destroyed. Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal and heartbreaking journey across the U.S.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div style={{ borderLeft: '3px solid var(--accent-color)', paddingLeft: '15px' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '5px' }}>CREATORS</div>
              <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>Craig Mazin<br/>Neil Druckmann</div>
            </div>
            <div style={{ borderLeft: '3px solid var(--accent-color)', paddingLeft: '15px' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '5px' }}>NETWORK</div>
              <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>HBO</div>
            </div>
            <div style={{ borderLeft: '3px solid var(--accent-color)', paddingLeft: '15px' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '5px' }}>GENRE</div>
              <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>Post-Apocalyptic<br/>Drama</div>
            </div>
            <div style={{ borderLeft: '3px solid var(--accent-color)', paddingLeft: '15px' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '5px' }}>PREMIERE</div>
              <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>January 15, 2023</div>
            </div>
          </div>
        </div>

        {/* Right Side: Image Collage */}
        <div style={{ flex: '1', position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
          <div style={{ 
            position: 'absolute', 
            width: '350px', 
            height: '450px', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            transform: 'rotate(-5deg) translateX(-50px) translateY(-30px)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
            border: '2px solid rgba(255,255,255,0.1)',
            zIndex: 2,
            animation: 'fadeIn 1s ease 0.3s both'
          }}>
            <img loading="lazy" src="/images/2page/Ellie.jpg" alt="Ellie" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          <div style={{ 
            position: 'absolute', 
            width: '300px', 
            height: '380px', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            transform: 'rotate(8deg) translateX(80px) translateY(50px)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.9)',
            border: '2px solid rgba(255,255,255,0.1)',
            zIndex: 1,
            animation: 'fadeIn 1s ease 0.6s both'
          }}>
            <img loading="lazy" src="/images/2page/Joel.jpg" alt="Joel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ 
            position: 'absolute', 
            width: '250px', 
            height: '150px', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            transform: 'translateX(-120px) translateY(180px)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.9)',
            border: '2px solid rgba(255,255,255,0.2)',
            zIndex: 3,
            animation: 'fadeIn 1s ease 0.9s both'
          }}>
            <img loading="lazy" src="/images/1page/episode1.png" alt="Scenery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

      </div>
      
      <div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Scroll Down</span>
        <ChevronDown size={24} className="bounce-animation" />
      </div>

      <div style={{ position: 'absolute', bottom: '20px', right: '30px', color: 'rgba(255,255,255,0.15)', fontSize: '0.65rem', letterSpacing: '1px', textAlign: 'right', pointerEvents: 'none', fontFamily: 'Inter, sans-serif', zIndex: 5 }}>
        Site was created for demonstration purposes.<br/>
        Designed and developed by <span style={{ color: 'var(--accent-color)', opacity: 0.5 }}>Klimanov D.</span>
      </div>
    </div>
  );
}

function CharactersPage({ setActiveTab, setSearchOpen }) {
  const characters = [
    {
      id: 'ellie',
      name: 'ELLIE WILLIAMS',
      role: 'Protagonist',
      bio: 'Now 19, Ellie has found a semblance of peace in Jackson. But when a violent event disrupts her life, she embarks on a relentless journey for justice.',
      img: '/images/2page/Ellie.jpg',
      bg: '/images/1page/episode1.png'
    },
    {
      id: 'joel',
      name: 'JOEL MILLER',
      role: 'Survivor',
      bio: 'Joel has settled down in Jackson after the traumatic events at the Firefly hospital. His relationship with Ellie has become strained over the years.',
      img: '/images/2page/Joel.jpg',
      bg: '/images/1page/episode2.jpg'
    },
    {
      id: 'abby',
      name: 'ABIGAIL ANDERSON',
      role: 'WLF Soldier',
      bio: 'Abby is a hardened soldier of the Washington Liberation Front. Her past is deeply intertwined with Joel and Ellie, leading to a fateful collision.',
      img: '/images/2page/Ellie.jpg',
      bg: '/images/1page/episode3.png'
    }
  ];

  const [activeChar, setActiveChar] = useState(characters[0]);

  return (
    <div className="page-container second-page">
      <img loading="lazy" src={activeChar.bg} alt="Background" className="sp-bg" style={{ animation: 'fadeIn 0.5s', transition: 'all 0.5s', filter: 'brightness(0.3)' }} />
      <div className="sp-overlay"></div>

      <NavigationBar activeTab="characters" setActiveTab={setActiveTab} setSearchOpen={setSearchOpen} />

      <div className="sp-content" style={{ flexDirection: 'row', alignItems: 'center', padding: '0 50px' }}>

        <div style={{ flex: 1, paddingRight: '50px', zIndex: 10, position: 'relative', height: '400px' }}>
          {characters.map(char => (
            <div
              key={`text-${char.id}`}
              style={{
                position: 'absolute',
                top: '50px',
                left: 0,
                opacity: activeChar.id === char.id ? 1 : 0,
                transition: 'all 0.8s ease-in-out',
                pointerEvents: activeChar.id === char.id ? 'auto' : 'none',
                transform: activeChar.id === char.id ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <h2 className="oswald-font" style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '10px' }}>{char.role.toUpperCase()}</h2>
              <h1 className="oswald-font" style={{ fontSize: '5rem', lineHeight: '0.9', marginBottom: '30px', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
                {char.name.split(' ')[0]}<br />
                <span>{char.name.split(' ')[1] || ''}</span>
              </h1>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)', maxWidth: '500px' }}>
                {char.bio}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '20px', zIndex: 10 }}>
          {characters.map(char => (
            <div
              key={char.id}
              onClick={() => setActiveChar(char)}
              style={{
                width: '100px',
                height: '150px',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: activeChar.id === char.id ? '3px solid var(--accent-color)' : '3px solid transparent',
                transform: activeChar.id === char.id ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s ease',
                opacity: activeChar.id === char.id ? 1 : 0.6
              }}
            >
              <img loading="lazy" src={char.img} alt={char.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>

      </div>
      
      <div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Scroll Down</span>
        <ChevronDown size={24} className="bounce-animation" />
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('episodes');
  const [isLoading, setIsLoading] = useState(true);
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {/* Loading Screen */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'black', zIndex: 99999,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? 'auto' : 'none',
        transition: 'opacity 1.5s ease-out'
      }}>
        <div className="loading-wrapper">
          <div className="loading-text">
            THE LAST OF US
          </div>
        </div>
        
        <div className="loading-progress-container">
          <div className="loading-progress-bar"></div>
        </div>
        
        <div className="loading-subtext">
          VIRUS INFECTION...
        </div>
      </div>

      {/* Trailer Modal */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)',
        zIndex: 99990, display: 'flex', justifyContent: 'center', alignItems: 'center',
        opacity: trailerOpen ? 1 : 0, pointerEvents: trailerOpen ? 'auto' : 'none',
        transition: 'all 0.5s ease-in-out'
      }} onClick={() => setTrailerOpen(false)}>
        <button style={{
          position: 'absolute', top: '40px', right: '50px',
          background: 'none', border: 'none', color: 'white', cursor: 'pointer',
          padding: '10px', transition: 'transform 0.3s'
        }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2) rotate(90deg)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}>
          <X size={40} />
        </button>
        <div style={{ width: '80%', maxWidth: '1000px', aspectRatio: '16/9', background: 'black', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.8)', transform: trailerOpen ? 'scale(1)' : 'scale(0.9)', transition: 'transform 0.5s ease-in-out' }} onClick={e => e.stopPropagation()}>
          {trailerOpen && (
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uLtkt8BonwM?autoplay=1" title="The Last of Us Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          )}
        </div>
      </div>

      <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: activeTab === 'episodes' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: activeTab === 'episodes' ? 'auto' : 'none', zIndex: activeTab === 'episodes' ? 10 : 0 }}>
          <SecondPage setActiveTab={setActiveTab} setTrailerOpen={setTrailerOpen} setSearchOpen={setSearchOpen} />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: activeTab === 'seasons' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: activeTab === 'seasons' ? 'auto' : 'none', zIndex: activeTab === 'seasons' ? 10 : 0 }}>
          <SeasonsPage setActiveTab={setActiveTab} setSearchOpen={setSearchOpen} />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: activeTab === 'actors' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: activeTab === 'actors' ? 'auto' : 'none', zIndex: activeTab === 'actors' ? 10 : 0 }}>
          <ActorsPage setActiveTab={setActiveTab} setSearchOpen={setSearchOpen} />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: activeTab === 'about' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: activeTab === 'about' ? 'auto' : 'none', zIndex: activeTab === 'about' ? 10 : 0 }}>
          <AboutPage setActiveTab={setActiveTab} setSearchOpen={setSearchOpen} />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: activeTab === 'characters' ? 1 : 0, transition: 'opacity 0.8s ease-in-out', pointerEvents: activeTab === 'characters' ? 'auto' : 'none', zIndex: activeTab === 'characters' ? 10 : 0 }}>
          <CharactersPage setActiveTab={setActiveTab} setSearchOpen={setSearchOpen} />
        </div>
      </div>
      <FirstPage setActiveTab={setActiveTab} setSearchOpen={setSearchOpen} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

export default App;


