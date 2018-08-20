import { ScoreviewDataModule } from './scoreview-data.module';

describe('ScoreviewDataModule', () => {
  let scoreviewDataModule: ScoreviewDataModule;

  beforeEach(() => {
    scoreviewDataModule = new ScoreviewDataModule();
  });

  it('should create an instance', () => {
    expect(scoreviewDataModule).toBeTruthy();
  });
});
