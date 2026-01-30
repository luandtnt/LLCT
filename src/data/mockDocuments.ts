import { ContentFormData, ContentType } from '../types/content';

// Extended Document interface with full ContentFormData
export interface ExtendedDocument {
  id: string;
  code: string;
  title: string;
  type: string;
  classification: string;
  author: string;
  createdDate: string;
  status: 'approved' | 'draft' | 'pending' | 'rejected';
  uploadDate?: string;
  // Full content data for modals
  contentData: Partial<ContentFormData>;
}

// Mock data for VAN_BAN (Văn bản)
export const mockVanBanDocuments: ExtendedDocument[] = [
  {
    id: 'vb-001',
    code: 'VB-20250130-001',
    title: 'Nghị quyết số 01/NQ-TW về tăng cường xây dựng Đảng',
    type: 'Văn bản',
    classification: 'Công khai',
    author: 'Ban Chấp hành Trung ương',
    createdDate: '2025-01-15',
    uploadDate: '2025-01-20',
    status: 'approved',
    contentData: {
      type: 'VAN_BAN',
      common: {
        code: 'VB-20250130-001',
        title: 'Nghị quyết số 01/NQ-TW về tăng cường xây dựng Đảng',
        classification: 'CONG_KHAI',
        authors: ['Ban Chấp hành Trung ương', 'Bộ Chính trị'],
        summary: 'Nghị quyết đề ra các nhiệm vụ, giải pháp trọng tâm nhằm tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi sự suy thoái về tư tưởng chính trị, đạo đức, lối sống, những biểu hiện "tự diễn biến", "tự chuyển hóa" trong nội bộ.',
        language: 'Tiếng Việt',
      },
      sourceMetadata: {
        sourceType: 'INTERNAL',
        internalCode: 'LT-2025-001',
        providerOrg: 'Văn phòng Trung ương Đảng',
        rights: 'NOI_BO',
        rightsNote: 'Chỉ sử dụng nội bộ trong hệ thống Đảng',
      },
      specific: {
        documentType: 'Nghị quyết',
        issueDate: '2025-01-10',
        issueYear: '2025',
        documentNumber: '01/NQ-TW',
        issuer: 'Ban Chấp hành Trung ương',
        issueLocation: 'Hà Nội',
        effectiveStatus: 'CON_HIEU_LUC',
        relatedDocuments: 'Nghị quyết 04-NQ/TW, Chỉ thị 05-CT/TW',
      },
      fileMetadata: {
        fileName: 'nghi-quyet-01-nq-tw.pdf',
        fileSize: 2458624,
        fileFormat: 'PDF',
        pageCount: 45,
      },
    },
  },
  {
    id: 'vb-002',
    code: 'VB-20250128-002',
    title: 'Chỉ thị số 05-CT/TW về đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh',
    type: 'Văn bản',
    classification: 'Công khai',
    author: 'Bộ Chính trị',
    createdDate: '2025-01-10',
    uploadDate: '2025-01-15',
    status: 'pending',
    contentData: {
      type: 'VAN_BAN',
      common: {
        code: 'VB-20250128-002',
        title: 'Chỉ thị số 05-CT/TW về đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh',
        classification: 'CONG_KHAI',
        authors: ['Bộ Chính trị'],
        summary: 'Chỉ thị nhằm tiếp tục đẩy mạnh việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh gắn với thực hiện Nghị quyết Trung ương 4 về xây dựng, chỉnh đốn Đảng.',
        language: 'Tiếng Việt',
      },
      sourceMetadata: {
        sourceType: 'ONLINE',
        url: 'https://dangcongsan.vn/chi-thi-05-ct-tw',
        accessedAt: '30/01/2025',
        rights: 'CONG_KHAI',
      },
      specific: {
        documentType: 'Chỉ thị',
        issueDate: '2025-01-05',
        issueYear: '2025',
        documentNumber: '05-CT/TW',
        issuer: 'Bộ Chính trị',
        issueLocation: 'Hà Nội',
        effectiveStatus: 'CON_HIEU_LUC',
      },
      fileMetadata: {
        fileName: 'chi-thi-05-ct-tw.pdf',
        fileSize: 1856432,
        fileFormat: 'PDF',
        pageCount: 28,
      },
    },
  },
  {
    id: 'vb-003',
    code: 'VB-20250125-003',
    title: 'Kết luận số 21-KL/TW về tăng cường công tác phòng, chống tham nhũng',
    type: 'Văn bản',
    classification: 'Nội bộ',
    author: 'Ban Chấp hành Trung ương',
    createdDate: '2025-01-08',
    status: 'draft',
    contentData: {
      type: 'VAN_BAN',
      common: {
        code: 'VB-20250125-003',
        title: 'Kết luận số 21-KL/TW về tăng cường công tác phòng, chống tham nhũng',
        classification: 'NOI_BO',
        authors: ['Ban Chấp hành Trung ương'],
        summary: 'Kết luận đánh giá tình hình và đề ra các giải pháp tăng cường công tác phòng, chống tham nhũng, tiêu cực trong giai đoạn mới.',
        language: 'Tiếng Việt',
      },
      sourceMetadata: {
        sourceType: 'INTERNAL',
        internalCode: 'LT-2025-003',
        providerOrg: 'Văn phòng Trung ương Đảng',
        rights: 'NOI_BO',
      },
      specific: {
        documentType: 'Kết luận',
        issueDate: '2025-01-08',
        issueYear: '2025',
        documentNumber: '21-KL/TW',
        issuer: 'Ban Chấp hành Trung ương',
        issueLocation: 'Hà Nội',
        effectiveStatus: 'CON_HIEU_LUC',
      },
      fileMetadata: {
        fileName: 'ket-luan-21-kl-tw.pdf',
        fileSize: 3245678,
        fileFormat: 'PDF',
        pageCount: 52,
      },
    },
  },
];

// Mock data for SACH (Sách)
export const mockSachDocuments: ExtendedDocument[] = [
  {
    id: 'sach-001',
    code: 'SACH-20250125-001',
    title: 'Lịch sử Đảng Cộng sản Việt Nam - Tập 1 (1930-1954)',
    type: 'Sách',
    classification: 'Công khai',
    author: 'Ban Chấp hành Trung ương',
    createdDate: '2024-12-20',
    uploadDate: '2025-01-05',
    status: 'approved',
    contentData: {
      type: 'SACH',
      common: {
        code: 'SACH-20250125-001',
        title: 'Lịch sử Đảng Cộng sản Việt Nam - Tập 1 (1930-1954)',
        classification: 'CONG_KHAI',
        authors: ['Ban Chấp hành Trung ương', 'Viện Lịch sử Đảng'],
        summary: 'Cuốn sách trình bày toàn diện, hệ thống lịch sử 24 năm đầu tiên của Đảng Cộng sản Việt Nam, từ khi thành lập (1930) đến khi giành được độc lập dân tộc (1954). Nội dung phản ánh quá trình lãnh đạo cách mạng Việt Nam của Đảng trong giai đoạn đầu tiên.',
        language: 'Tiếng Việt',
      },
      sourceMetadata: {
        sourceType: 'INTERNAL',
        internalCode: 'NXB-CTQG-2024-156',
        providerOrg: 'Nhà xuất bản Chính trị Quốc gia Sự thật',
        rights: 'NOI_BO',
        rightsNote: 'Bản quyền thuộc Nhà xuất bản Chính trị Quốc gia',
      },
      specific: {
        publishYear: '2024',
        publisher: 'Nhà xuất bản Chính trị Quốc gia Sự thật',
        edition: 'Tái bản lần thứ 3, có bổ sung',
        isbn: '978-604-0-12345-6',
        publishLocation: 'Hà Nội',
        hasTranslation: false,
      },
      fileMetadata: {
        fileName: 'lich-su-dang-tap-1.pdf',
        fileSize: 15728640,
        fileFormat: 'PDF',
        pageCount: 456,
      },
    },
  },
  {
    id: 'sach-002',
    code: 'SACH-20250120-002',
    title: 'Tư tưởng Hồ Chí Minh về xây dựng Đảng',
    type: 'Sách',
    classification: 'Nội bộ',
    author: 'PGS.TS Nguyễn Văn A',
    createdDate: '2024-12-15',
    status: 'draft',
    contentData: {
      type: 'SACH',
      common: {
        code: 'SACH-20250120-002',
        title: 'Tư tưởng Hồ Chí Minh về xây dựng Đảng',
        classification: 'NOI_BO',
        authors: ['PGS.TS Nguyễn Văn A', 'TS Trần Thị B'],
        summary: 'Công trình nghiên cứu chuyên sâu về tư tưởng Hồ Chí Minh trong công tác xây dựng Đảng, từ lý luận đến thực tiễn. Sách phân tích các quan điểm cơ bản của Người về vai trò, vị trí, tính chất, nguyên tắc tổ chức và hoạt động của Đảng.',
        language: 'Tiếng Việt',
      },
      sourceMetadata: {
        sourceType: 'INTERNAL',
        internalCode: 'HV-CTQG-2024-089',
        providerOrg: 'Học viện Chính trị Quốc gia Hồ Chí Minh',
        rights: 'NOI_BO',
      },
      specific: {
        publishYear: '2024',
        publisher: 'Nhà xuất bản Lý luận Chính trị',
        edition: 'Lần xuất bản thứ nhất',
        isbn: '978-604-0-23456-7',
        publishLocation: 'Hà Nội',
        hasTranslation: false,
      },
      fileMetadata: {
        fileName: 'tu-tuong-hcm-xay-dung-dang.pdf',
        fileSize: 8945632,
        fileFormat: 'PDF',
        pageCount: 324,
      },
    },
  },
  {
    id: 'sach-003',
    code: 'SACH-20250110-003',
    title: 'Đảng Cộng sản Việt Nam - 95 năm lãnh đạo và phát triển',
    type: 'Sách',
    classification: 'Công khai',
    author: 'Viện Lịch sử Đảng',
    createdDate: '2024-12-01',
    uploadDate: '2024-12-10',
    status: 'rejected',
    contentData: {
      type: 'SACH',
      common: {
        code: 'SACH-20250110-003',
        title: 'Đảng Cộng sản Việt Nam - 95 năm lãnh đạo và phát triển',
        classification: 'CONG_KHAI',
        authors: ['Viện Lịch sử Đảng', 'Học viện Chính trị Quốc gia'],
        summary: 'Tác phẩm tổng hợp 95 năm lịch sử vẻ vang của Đảng Cộng sản Việt Nam, từ ngày thành lập đến nay, với những thành tựu to lớn trong sự nghiệp xây dựng và bảo vệ Tổ quốc.',
        language: 'Tiếng Việt',
      },
      sourceMetadata: {
        sourceType: 'INTERNAL',
        internalCode: 'NXB-CTQG-2024-200',
        providerOrg: 'Nhà xuất bản Chính trị Quốc gia Sự thật',
        rights: 'CONG_KHAI',
      },
      specific: {
        publishYear: '2024',
        publisher: 'Nhà xuất bản Chính trị Quốc gia Sự thật',
        edition: 'Lần xuất bản thứ nhất',
        isbn: '978-604-0-34567-8',
        publishLocation: 'Hà Nội',
        hasTranslation: false,
      },
      fileMetadata: {
        fileName: 'dang-95-nam.pdf',
        fileSize: 12456789,
        fileFormat: 'PDF',
        pageCount: 512,
      },
    },
  },
];

// Mock data for AUDIO
export const mockAudioDocuments: ExtendedDocument[] = [
  {
    id: 'audio-001',
    code: 'AUDIO-20250122-001',
    title: 'Bài phát biểu của Tổng Bí thư tại Hội nghị Trung ương 8',
    type: 'Audio',
    classification: 'Nội bộ',
    author: 'Tổng Bí thư',
    createdDate: '2025-01-18',
    uploadDate: '2025-01-20',
    status: 'approved',
    contentData: {
      type: 'AUDIO',
      common: {
        code: 'AUDIO-20250122-001',
        title: 'Bài phát biểu của Tổng Bí thư tại Hội nghị Trung ương 8',
        classification: 'NOI_BO',
        authors: ['Tổng Bí thư Nguyễn Phú Trọng'],
        summary: 'Bài phát biểu quan trọng của Tổng Bí thư tại phiên khai mạc Hội nghị lần thứ 8 Ban Chấp hành Trung ương khóa XIII, đề cập đến các vấn đề trọng tâm về phát triển kinh tế-xã hội và xây dựng Đảng.',
        language: 'Tiếng Việt',
      },
      sourceMetadata: {
        sourceType: 'INTERNAL',
        internalCode: 'AUDIO-HNTW8-2025',
        providerOrg: 'Văn phòng Trung ương Đảng',
        rights: 'NOI_BO',
        rightsNote: 'Chỉ phục vụ nghiên cứu nội bộ',
      },
      specific: {
        releaseDate: '2025-01-15',
        platform: 'Hệ thống nội bộ Đảng',
        programName: 'Hội nghị Trung ương 8',
        language: 'Tiếng Việt',
      },
      fileMetadata: {
        fileName: 'phat-bieu-tbt-hntw8.mp3',
        fileSize: 45678912,
        fileFormat: 'MP3',
        duration: 3845, // seconds (64 phút)
      },
    },
  },
];

// Mock data for VIDEO
export const mockVideoDocuments: ExtendedDocument[] = [
  {
    id: 'video-001',
    code: 'VIDEO-20250118-001',
    title: 'Lễ kỷ niệm 95 năm Ngày thành lập Đảng Cộng sản Việt Nam',
    type: 'Video',
    classification: 'Công khai',
    author: 'Đài Truyền hình Việt Nam',
    createdDate: '2025-02-03',
    uploadDate: '2025-02-05',
    status: 'approved',
    contentData: {
      type: 'VIDEO',
      common: {
        code: 'VIDEO-20250118-001',
        title: 'Lễ kỷ niệm 95 năm Ngày thành lập Đảng Cộng sản Việt Nam',
        classification: 'CONG_KHAI',
        authors: ['Đài Truyền hình Việt Nam'],
        summary: 'Chương trình đặc biệt ghi lại toàn cảnh Lễ kỷ niệm 95 năm Ngày thành lập Đảng Cộng sản Việt Nam (3/2/1930 - 3/2/2025), với sự tham dự của các đồng chí lãnh đạo Đảng, Nhà nước và đông đảo đại biểu.',
        language: 'Tiếng Việt',
      },
      sourceMetadata: {
        sourceType: 'ONLINE',
        url: 'https://vtv.vn/le-ky-niem-95-nam-thanh-lap-dang',
        accessedAt: '05/02/2025',
        rights: 'CONG_KHAI',
      },
      specific: {
        releaseDate: '2025-02-03',
        platform: 'VTV1 - Đài Truyền hình Việt Nam',
        channelName: 'VTV1',
        eventName: 'Lễ kỷ niệm 95 năm Ngày thành lập Đảng',
        location: 'Nhà hát Lớn Hà Nội',
        language: 'Tiếng Việt',
      },
      fileMetadata: {
        fileName: 'le-ky-niem-95-nam-dang.mp4',
        fileSize: 1258291200,
        fileFormat: 'MP4',
        duration: 7200, // 2 giờ
        resolution: '1920x1080',
      },
    },
  },
];

// Mock data for HINH_ANH
export const mockHinhAnhDocuments: ExtendedDocument[] = [
  {
    id: 'img-001',
    code: 'IMG-20250115-001',
    title: 'Bác Hồ với đồng bào dân tộc thiểu số',
    type: 'Hình ảnh',
    classification: 'Công khai',
    author: 'Bảo tàng Hồ Chí Minh',
    createdDate: '1960-05-19',
    uploadDate: '2025-01-10',
    status: 'approved',
    contentData: {
      type: 'HINH_ANH',
      common: {
        code: 'IMG-20250115-001',
        title: 'Bác Hồ với đồng bào dân tộc thiểu số',
        classification: 'CONG_KHAI',
        authors: ['Nhiếp ảnh gia Trần Hồng'],
        summary: 'Bức ảnh lịch sử ghi lại khoảnh khắc Chủ tịch Hồ Chí Minh thăm và trò chuyện với đồng bào dân tộc thiểu số tại Tây Bắc năm 1960.',
        language: 'Tiếng Việt',
      },
      sourceMetadata: {
        sourceType: 'INTERNAL',
        internalCode: 'BTG-HCM-1960-156',
        providerOrg: 'Bảo tàng Hồ Chí Minh',
        rights: 'CONG_KHAI',
        rightsNote: 'Được phép sử dụng cho mục đích giáo dục và nghiên cứu',
      },
      specific: {
        creationDate: '1960-05-19',
        imageType: 'Ảnh chụp',
        caption: 'Chủ tịch Hồ Chí Minh thăm đồng bào dân tộc thiểu số',
        altText: 'Bác Hồ đang ngồi trò chuyện cùng các đồng bào dân tộc thiểu số trong trang phục truyền thống, không khí thân mật và ấm áp',
        collection: 'Bộ sưu tập ảnh lịch sử Hồ Chí Minh',
      },
      fileMetadata: {
        fileName: 'bac-ho-voi-dong-bao-dtts.jpg',
        fileSize: 3456789,
        fileFormat: 'JPEG',
        dimensions: { width: 2400, height: 1800 },
      },
    },
  },
];

// Combine all mock documents
export const allMockDocuments: ExtendedDocument[] = [
  ...mockVanBanDocuments,
  ...mockSachDocuments,
  ...mockAudioDocuments,
  ...mockVideoDocuments,
  ...mockHinhAnhDocuments,
];

// Helper function to get documents by type
export const getDocumentsByType = (type: ContentType): ExtendedDocument[] => {
  switch (type) {
    case 'VAN_BAN':
      return mockVanBanDocuments;
    case 'SACH':
      return mockSachDocuments;
    case 'AUDIO':
      return mockAudioDocuments;
    case 'VIDEO':
      return mockVideoDocuments;
    case 'HINH_ANH':
      return mockHinhAnhDocuments;
    default:
      return [];
  }
};

// Helper function to get document by ID
export const getDocumentById = (id: string): ExtendedDocument | undefined => {
  return allMockDocuments.find(doc => doc.id === id);
};
