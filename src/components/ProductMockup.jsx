export default function ProductMockup() {
  return (
    <div className="product-mockup" aria-hidden="true">
      <div className="product-mockup-glow" />
      <div className="product-card">
        <div className="product-card-top">
          <div className="product-pair">
            <span className="pair-avatar pair-a">A</span>
            <span className="pair-path">
              <span className="pair-path-dot" />
              <span className="pair-path-line" />
              <span className="pair-path-dot" />
            </span>
            <span className="pair-avatar pair-b">J</span>
          </div>
          <div className="product-pair-meta">
            <p className="product-goal-label">This week</p>
            <p className="product-goal-title">Walk 30 minutes · 3 times</p>
          </div>
        </div>

        <div className="product-progress">
          <div className="progress-track">
            <span className="progress-fill" style={{ width: '66%' }} />
          </div>
          <div className="progress-meta">
            <span>2 of 3 walks</span>
            <span className="progress-streak">3-week streak</span>
          </div>
        </div>

        <div className="product-feed">
          <div className="feed-item feed-checkin">
            <span className="pair-avatar pair-a sm">A</span>
            <div>
              <p className="feed-title">Alex checked in</p>
              <p className="feed-body">First walk done. Almost skipped it.</p>
              <p className="feed-time">Wed · 7:14 AM</p>
            </div>
            <span className="feed-react">Nice</span>
          </div>
          <div className="feed-item feed-nudge">
            <span className="pair-avatar pair-b sm">J</span>
            <div>
              <p className="feed-title">Jordan sent encouragement</p>
              <p className="feed-body">One more and you’ve got it.</p>
              <p className="feed-time">Fri · 6:02 PM</p>
            </div>
          </div>
          <div className="feed-item feed-milestone">
            <div className="milestone-badge">Milestone</div>
            <p className="feed-title">Shared week complete last Sunday</p>
            <p className="feed-body">Small steps. Lasting change.</p>
          </div>
        </div>

        <div className="product-reminder">
          <span className="reminder-dot" />
          Gentle reminder · Evening check-in with Jordan
        </div>
      </div>
    </div>
  )
}
