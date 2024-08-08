import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import dog from "../../assets/강아지.jpg"
import dog2 from "../../assets/가로.jpg"

function ListLayout(props) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <h2>리스트페이지</h2>
                <div css={s.category}>
                    <h2>핫토픽</h2>
                    <h2>정치</h2>
                    <h2>경제</h2>
                    <h2>스포츠</h2>
                    <h2>엔터</h2>
                </div>
                <div css={s.mapContainer}>
                    <div css={s.dataSection}>
                        <h2>제목</h2>
                        <div>
                            <div >
                                <img src={dog} alt="" />
                            </div>
                            <div css={s.textConatainer}>
                                <p>대한민국의 영토는 한반도와 그 부속도서로 한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.
                                    국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.</p>
                                <div css={s.publisherContainer}>
                                    <p>2024-08-08</p>
                                    <p>국민의 뉴쑤</p>
                                    <p>기무링 리포터</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* dataSection */}
                    <div css={s.dataSection}>
                        <h2>제목</h2>
                        <div>
                            <img src={dog2} alt="" />
                            <div css={s.textConatainer}>
                                <p>대한민국의 영토는 한반도와 그 부속도서로 한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.
                                    국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.</p>
                                <div css={s.publisherContainer}>
                                    <p>2024-08-08</p>
                                    <p>한결휘 늇쑤</p>
                                    <p>아몰랑 기자</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* dataSection */}
                    <div css={s.dataSection}>
                        <h2>제목</h2>
                        <div>
                            <div >
                                <img src={dog} alt="" />
                            </div>
                            <div css={s.textConatainer}>
                                <p>대한민국의 영토는 한반도와 그 부속도서로 한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.
                                    국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.</p>
                                <div css={s.publisherContainer}>
                                    <p>2024-08-08</p>
                                    <p>국민의 뉴쑤</p>
                                    <p>기무링 리포터</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* dataSection */}
                    <div css={s.dataSection}>
                        <h2>제목</h2>
                        <div>
                            <img src={dog2} alt="" />
                            <div css={s.textConatainer}>
                                <p>대한민국의 영토는 한반도와 그 부속도서로 한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.
                                    국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.</p>
                                <div css={s.publisherContainer}>
                                    <p>2024-08-08</p>
                                    <p>한결휘 늇쑤</p>
                                    <p>아몰랑 기자</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* dataSection */}
                    <div css={s.dataSection}>
                        <h2>제목</h2>
                        <div>
                            <div >
                                <img src={dog} alt="" />
                            </div>
                            <div css={s.textConatainer}>
                                <p>대한민국의 영토는 한반도와 그 부속도서로 한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.
                                    국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.</p>
                                <div css={s.publisherContainer}>
                                    <p>2024-08-08</p>
                                    <p>국민의 뉴쑤</p>
                                    <p>기무링 리포터</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* dataSection */}
                    <div css={s.dataSection}>
                        <h2>제목</h2>
                        <div>
                            <img src={dog2} alt="" />
                            <div css={s.textConatainer}>
                                <p>대한민국의 영토는 한반도와 그 부속도서로 한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.
                                    국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.</p>
                                <div css={s.publisherContainer}>
                                    <p>2024-08-08</p>
                                    <p>한결휘 늇쑤</p>
                                    <p>아몰랑 기자</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* dataSection */}
                    <div css={s.dataSection}>
                        <h2>제목</h2>
                        <div>
                            <div >
                                <img src={dog} alt="" />
                            </div>
                            <div css={s.textConatainer}>
                                <p>대한민국의 영토는 한반도와 그 부속도서로 한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.
                                    국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.</p>
                                <div css={s.publisherContainer}>
                                    <p>2024-08-08</p>
                                    <p>국민의 뉴쑤</p>
                                    <p>기무링 리포터</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* dataSection */}
                    <div css={s.dataSection}>
                        <h2>제목</h2>
                        <div>
                            <img src={dog2} alt="" />
                            <div css={s.textConatainer}>
                                <p>대한민국의 영토는 한반도와 그 부속도서로 한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.
                                    국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.</p>
                                <div css={s.publisherContainer}>
                                    <p>2024-08-08</p>
                                    <p>한결휘 늇쑤</p>
                                    <p>아몰랑 기자</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* dataSection */}

                </div>

            </div>
        </div>
    );
}

export default ListLayout;