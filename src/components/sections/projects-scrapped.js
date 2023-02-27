// return <></>;
// return (
//   <StyledProjectsSection>
//     <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

//     <Link className="inline-link archive-link" to="/archive" ref={revealArchiveLink}>
//       view the archive
//     </Link>

//     <ul className="projects-grid">
//       {prefersReducedMotion ? (
//         <>
//           {projectsToShow &&
//             projectsToShow.map(({ node }, i) => (
//               <StyledProject key={i}>{projectInner(node)}</StyledProject>
//             ))}
//         </>
//       ) : (
//         <TransitionGroup component={null}>
//           {projectsToShow &&
//             projectsToShow.map(({ node }, i) => (
//               <CSSTransition
//                 key={i}
//                 classNames="fadeup"
//                 timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
//                 exit={false}>
//                 <StyledProject
//                   key={i}
//                   ref={el => (revealProjects.current[i] = el)}
//                   style={{
//                     transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
//                   }}>
//                   {projectInner(node)}
//                 </StyledProject>
//               </CSSTransition>
//             ))}
//         </TransitionGroup>
//       )}
//     </ul>

//     <button className="more-button" onClick={() => setShowMore(!showMore)}>
//       Show {showMore ? 'Less' : 'More'}
//     </button>
//   </StyledProjectsSection>
// );
